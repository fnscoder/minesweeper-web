const GameFinishedMessage = ({ status, onNewGame }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <p className={`text-2xl ${status === 'won' ? 'text-green-500' : 'text-red-500'}`}>
        {status === 'won' ? 'Congratulations! You won!' : 'Game Over! You lost!'}
      </p>
      <button onClick={onNewGame} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Try again!
      </button>
    </div>
  );
};

export default GameFinishedMessage;