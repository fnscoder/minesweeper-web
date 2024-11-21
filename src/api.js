import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const createGame = async (gameOptions) => {
  const response = await axios.post(`${API_URL}/games/`, gameOptions);
  return response.data;
};

export const fetchGame = async (gameId) => {
  const response = await axios.get(`${API_URL}/games/${gameId}/`);
  return response.data;
};

export const revealCell = async (gameId, cell) => {
  const response = await axios.post(`${API_URL}/games/${gameId}/reveal/`, cell);
  return response.data;
};

export const flagCell = async (gameId, cell) => {
  const response = await axios.post(`${API_URL}/games/${gameId}/flag/`, cell);
  return response.data;
};

export const updateGameUser = async (gameId, user) => {
  const response = await axios.patch(`${API_URL}/games/${gameId}/`, { user });
  return response.data;
};

export const fetchLeaderboard = async (size) => {
  const response = await axios.get(`${API_URL}/games/leaderboard/?size=${size}`);
  return response.data;
};