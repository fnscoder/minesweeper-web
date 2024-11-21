import propTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cell = ({ cell, onClick, gameStatus }) => {
  return (
    <div
      className={`w-8 h-8 flex items-center justify-center border cursor-pointer
        ${cell.is_revealed || cell.is_flagged ? 'bg-green-200 text-black' : 'bg-green-400'}
      `}
      onClick={onClick}
      onContextMenu={onClick}
    >
      {gameStatus === 'lost' && cell.is_mine ? (
        <FontAwesomeIcon icon="bomb" className="text-black" />
      ) : cell.is_flagged ? (
        <FontAwesomeIcon icon="flag" className="text-red-500" />
      ) : (
        cell.is_revealed && (
          cell.is_mine ? <FontAwesomeIcon icon="bomb" className="text-black" /> : cell.adjacent_mines
        )
      )}
    </div>
  );
};

Cell.propTypes = {
  cell: propTypes.shape({
    is_revealed: propTypes.bool,
    is_flagged: propTypes.bool,
    is_mine: propTypes.bool,
    adjacent_mines: propTypes.number,
  }).isRequired,
  onClick: propTypes.func.isRequired,
  gameStatus: propTypes.oneOf(['active', 'won', 'lost']).isRequired,
};

export default Cell;