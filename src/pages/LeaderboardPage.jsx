import { useState, useEffect } from 'react';
import { fetchLeaderboard } from '../api';
import LeaderboardTable from '../components/LeaderboardTable';

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState({ easy: [], medium: [], hard: [], custom: [] });
  const [size, setSize] = useState(10);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchInitialLeaderboard(size);
  }, [size]);

  const fetchInitialLeaderboard = async (size) => {
    try {
      const data = await fetchLeaderboard(size);
      setLeaderboard(data);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
    setError('');
  };

  const handleFetchLeaderboard = async () => {
    if (!Number.isInteger(Number(size)) || size <= 0) {
      setError('Please enter a valid positive number.');
      return;
    }
    try {
      const data = await fetchLeaderboard(size);
      setLeaderboard(data);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
      <div className="mb-4 flex items-center space-x-2">
        <label htmlFor="size" className="mr-2">Want to see more?</label>
        <input
          type="number"
          id="size"
          value={size}
          onChange={handleSizeChange}
          className="px-4 py-2 border rounded"
        />
        <button onClick={handleFetchLeaderboard} className="px-4 py-2 bg-blue-500 text-white rounded">
          See
        </button>
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="w-full max-w-4xl">
        {['easy', 'medium', 'hard', 'custom'].map((mode) => (
          <LeaderboardTable key={mode} mode={mode} data={leaderboard[mode]} />
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;