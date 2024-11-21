import { useNavigate } from 'react-router-dom';
import { createGame } from '../api';
import GameControls from '../components/GameControls';

const Home = () => {
  const navigate = useNavigate();

  const handleCreateGame = async (gameOptions) => {
    try {
      const data = await createGame(gameOptions);
      const gameId = data.id;
      navigate(`/game/${gameId}`);
    } catch (error) {
      console.error('Error creating game:', error);
    }
  };

  return (
    <div className="home text-center">
      <h1 className="text-6xl mb-20">Let`s play!</h1>
      <GameControls onCreateGame={handleCreateGame} />
    </div>
  );
};

export default Home;