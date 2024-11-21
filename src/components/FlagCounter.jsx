import propTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FlagCounter = ({ flagsUsed, totalMines }) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <FontAwesomeIcon icon="flag" className="text-red-500" />
      <span>{flagsUsed} / {totalMines}</span>
    </div>
  );
};

FlagCounter.propTypes = {
  flagsUsed: propTypes.number.isRequired,
  totalMines: propTypes.number.isRequired,
}

export default FlagCounter;