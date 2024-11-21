import propTypes from "prop-types";
import { useState } from 'react';
import Button from './Button';

const CongratsModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.length > 20) {
      alert('Name must be 20 characters or less.');
      return;
    }
    onSubmit(name);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-cyan-500 p-6 rounded shadow-lg flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">Congratulations!</h2>
        <p className="text-center">You won the game! Please enter your name:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="20"
          className="px-4 py-2 text-blue-700 bg-cyan-100 border rounded"
        />
        <Button onClick={handleSubmit}>
          Submit
        </Button>
        <Button className="bg-gray-500" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

CongratsModal.propTypes = {
  isOpen: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
}

export default CongratsModal;