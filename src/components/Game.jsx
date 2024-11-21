import propTypes from "prop-types";
import Cell from './Cell';

const generateBoard = (cells, rows, columns) => {
  const board = Array.from({ length: rows }, () => Array(columns).fill(null));
  cells.forEach(cell => {
    board[cell.row][cell.column] = cell;
  });
  return board;
};

const Game = ({ game, onCellClick }) => {
  const { cells, rows, columns, status } = game;
  const board = generateBoard(cells, rows, columns);

  const handleCellClick = (rowIndex, colIndex, event) => {
    event.preventDefault();
    onCellClick(rowIndex, colIndex);
  };

  return (
    <div className="grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            cell={cell}
            gameStatus={status}
            onClick={(event) => handleCellClick(rowIndex, colIndex, event)}
            onContextMenu={(event) => handleCellClick(rowIndex, colIndex, event)}
          />
        ))
      )}
    </div>
  );
};

Game.propTypes = {
  game: propTypes.shape({
    cells: propTypes.arrayOf(
      propTypes.shape({
        row: propTypes.number.isRequired,
        column: propTypes.number.isRequired,
        isMine: propTypes.bool,
        isRevealed: propTypes.bool,
        isFlagged: propTypes.bool,
        minesAround: propTypes.number,
      })
    ).isRequired,
    rows: propTypes.number.isRequired,
    columns: propTypes.number.isRequired,
    status: propTypes.oneOf(['active', 'won', 'lost']).isRequired,
  }).isRequired,
  onCellClick: propTypes.func.isRequired,
};

export default Game;