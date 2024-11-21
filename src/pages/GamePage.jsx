import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchGame, revealCell, flagCell, updateGameUser } from '../api';
import Game from '../components/Game';
import FlagCounter from '../components/FlagCounter';
import GameFinishedMessage from '../components/GameFinishedMessage';
import ActionModal from '../components/ActionModal';
import CongratsModal from '../components/CongratsModal';
import FlashMessage from '../components/FlashMessage';

const GamePage = () => {
  const [game, setGame] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [congratsModalOpen, setCongratsModalOpen] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [flagsUsed, setFlagsUsed] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { gameId } = useParams();
  const navigate = useNavigate();

  const loadGame = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchGame(gameId);
      setGame(data);
      setFlagsUsed(data.cells.filter(cell => cell.is_flagged).length);
      setError('');
    } catch (error) {
      const errorMessage = error.response?.data || 'Failed to fetch game. Please try again later.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [gameId]);

  useEffect(() => {
    loadGame();
  }, [loadGame]);

  useEffect(() => {
    if (game && game.status === 'won') {
      setCongratsModalOpen(true);
    }
  }, [game]);

  const handleCellClick = (row, column) => {
    setSelectedCell({ row, column });
    setModalOpen(true);
  };

  const handleReveal = async () => {
    try {
      const cell = game.cells.find(c => c.row === selectedCell.row && c.column === selectedCell.column);
      if (cell.is_flagged) {
        await flagCell(gameId, selectedCell);
        setFlagsUsed(flagsUsed - 1);
      }
      const data = await revealCell(gameId, selectedCell);
      setGame(data);
      setModalOpen(false);
    } catch (error) {
      const errorMessage = error.response?.data || 'Error revealing cell. Please try again.';
      setError(errorMessage);
    }
  };

  const handleFlag = async () => {
    try {
      const data = await flagCell(gameId, selectedCell);
      const updatedCell = data;

      setGame(prevGame => {
        const updatedCells = prevGame.cells.map(cell =>
          cell.id === updatedCell.id ? updatedCell : cell
        );
        return { ...prevGame, cells: updatedCells };
      });

      setFlagsUsed(flagsUsed + (updatedCell.is_flagged ? 1 : -1));
      setModalOpen(false);
    } catch (error) {
      const errorMessage = error.response?.data || 'Error flagging cell. Please try again.';
      setError(errorMessage);
    }
  };

  const handleNewGame = () => {
    navigate('/');
  };

  const handleCongratsSubmit = async (name) => {
    try {
      await updateGameUser(gameId, name);
      setCongratsModalOpen(false);
    } catch (error) {
      const errorMessage = error.response?.data || 'Error updating game with user name. Please try again.';
      setError(errorMessage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {error && <FlashMessage message={error} onClose={() => setError('')} />}
          {game ? (
            <>
              <FlagCounter flagsUsed={flagsUsed} totalMines={game.mines} />
              <Game game={game} onCellClick={handleCellClick} />
              {game.status !== 'active' && (
                <GameFinishedMessage status={game.status} onNewGame={handleNewGame} />
              )}
              <ActionModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onReveal={handleReveal}
                onFlag={handleFlag}
              />
              <CongratsModal
                isOpen={congratsModalOpen}
                onClose={() => setCongratsModalOpen(false)}
                onSubmit={handleCongratsSubmit}
              />
            </>
          ) : (
            <p>Loading game...</p>
          )}
        </>
      )}
    </div>
  );
};

export default GamePage;