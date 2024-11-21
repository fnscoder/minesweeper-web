import propTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

const ActionModal = ({ isOpen, onClose, onReveal, onFlag }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg flex flex-col gap-4">
        <Button onClick={onReveal}>
          <FontAwesomeIcon className="mr-2" icon="eye" />
          Reveal
        </Button>
        <Button className="bg-red-500" onClick={onFlag}>
          <FontAwesomeIcon className="mr-2" icon="flag" />
          Flag
        </Button>
        <Button className="bg-gray-500" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

ActionModal.propTypes = {
  isOpen: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  onReveal: propTypes.func.isRequired,
  onFlag: propTypes.func.isRequired,
}

export default ActionModal;