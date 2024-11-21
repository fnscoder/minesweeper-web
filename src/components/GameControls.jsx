import propTypes from "prop-types";
import { useState } from 'react';
import Button from './Button';
import FlashMessage from './FlashMessage';

const GameControls = ({ onCreateGame }) => {
  const [mode, setMode] = useState('easy');
  const [rows, setRows] = useState('');
  const [columns, setColumns] = useState('');
  const [mines, setMines] = useState('');
  const [error, setError] = useState('');

  const handleCreateGame = () => {
    if (mode === 'custom') {
      if (!rows || !columns || !mines) {
        setError('All fields are required.');
        return;
      }
      const totalCells = rows * columns;
      if (mines >= totalCells) {
        setError('Mines cannot be greater than or equal to the total number of cells.');
        return;
      }
      setError('');
      onCreateGame({ mode, rows, columns, mines });
    } else {
      setError('');
      onCreateGame({ mode });
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setError('');
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {error && <FlashMessage message={error} onClose={() => setError('')} />}
      <select
        value={mode}
        onChange={(e) => {
          setMode(e.target.value);
          setError('');
        }}
        className="px-6 py-3 border rounded text-2xl"
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        <option value="custom">Custom</option>
      </select>
      {mode === 'custom' && (
        <div className="flex flex-col space-y-2">
          <input
            type="number"
            placeholder="Rows"
            value={rows}
            onChange={handleInputChange(setRows)}
            required
            className="px-4 py-2 border rounded"
          />
          <input
            type="number"
            placeholder="Columns"
            value={columns}
            onChange={handleInputChange(setColumns)}
            required
            className="px-4 py-2 border rounded"
          />
          <input
            type="number"
            placeholder="Mines"
            value={mines}
            onChange={handleInputChange(setMines)}
            required
            className="px-4 py-2 border rounded"
          />
        </div>
      )}
      <Button className="w-48 h-16 text-2xl" onClick={handleCreateGame}>
        Start Game
      </Button>
    </div>
  );
};

GameControls.propTypes = {
  onCreateGame: propTypes.func.isRequired,
}

export default GameControls;