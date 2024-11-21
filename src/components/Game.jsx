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

export default Game;