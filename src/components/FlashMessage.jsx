import propTypes from "prop-types";
import { useEffect } from 'react';

const FlashMessage = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <div className="fixed top-32 right-4 bg-red-500 bg-opacity-85 text-white px-4 py-2 rounded shadow-lg">
      {message}
    </div>
  );
};

FlashMessage.propTypes = {
  message: propTypes.string,
  onClose: propTypes.func.isRequired,
}

export default FlashMessage;