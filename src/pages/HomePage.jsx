import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createGame } from '../api';
import GameControls from '../components/GameControls';
import Loading from '../components/Loading';
import FlashMessage from '../components/FlashMessage';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreateGame = async (gameOptions) => {
    setLoading(true);
    try {
      const data = await createGame(gameOptions);
      const gameId = data.id;
      navigate(`/game/${gameId}`);
    } catch (error) {
      const errorMessage = error.response?.data || 'Error creating game. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home text-center">
      {loading && <Loading />}
      {error && <FlashMessage message={error} onClose={() => setError('')} />}
      {!loading && (
        <>
          <h1 className="text-6xl mb-20">Let&apos;s play!</h1>
          <GameControls onCreateGame={handleCreateGame} />
        </>
      )}
    </div>
  );
};

export default Home;