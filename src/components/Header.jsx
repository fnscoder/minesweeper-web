import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 items-center flex flex-col">
      <h3 className="text-3xl font-bold">Minesweeper</h3>
      <nav className="flex gap-10 justify-center">
        <Link to="/" className="mx-2 hover:underline">Home</Link>
        <Link to="/leaderboard" className="hover:underline">Leaderboard</Link>
        <a href="https://en.wikipedia.org/wiki/Minesweeper_(video_game)" target="_blank" rel="noreferrer" className="mx-2 hover:underline">About</a>
        <a href='https://github.com/fnscoder/minesweeper-web' target='_blank' rel='noreferrer' className="mx-2 hover:underline">GitHub</a>
      </nav>
    </header>
  );
};

export default Header;