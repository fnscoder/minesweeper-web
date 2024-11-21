# Minesweeper

This repo contains the frontend code built using React for the Minesweeper game.

The Backend is built with Python and Django and the code is available at [Minesweeper API](https://github.com/fnscoder/minesweeper-api)

You can check the live game here: [Minesweeper](https://minesweeper-web-eight.vercel.app/)

## How to run the project

```
1. Clone the project
 $ git clone git@github.com:fnscoder/minesweeper-web.git
 
2. Enter on the project folder
 $ cd minesweeper-web
 
3. Create your .env file
 $ cp contrib/.env-sample .env
 
4. Install dependencies
 $ npm install

5. Run the project
 $ npm run dev
 
6. Access the project running 
 $ http://localhost:5173
```

## Stack used
* React
* Vite
* React Router Dom
* Axios
* Tailwind CSS
* font-awesome
* Running on Vercel


## About the game
This Minesweeper game offers a classic experience with four different modes of play: Easy, Medium, Hard, and Custom. 
Each mode provides a unique level of challenge, catering to both beginners and experienced players.

### Game Modes
**Easy**: 9 x9 board with 10 mines. A beginner-friendly mode with a smaller grid and fewer mines.

**Medium**: 16 x 16 board with 40 mines. A moderately challenging mode with a larger grid and more mines.

**Hard**: 30 x 16 board with 99 mines. A difficult mode with an even larger grid and a high number of mines.

**Custom**: Allows players to define their own grid size and number of mines for a personalized challenge.

### Pages
**Home Page**: The starting point of the game where players can select the game mode and start a new game.

**Game Page**: The main gameplay interface where players interact with the grid, reveal cells, and flag potential mines.

**Leaderboard Page**: Displays the top players for each game mode, allowing players to see how they rank against others.

### Features
**Responsive Design**: The game is designed to be responsive and works well on both desktop and mobile devices.

**Interactive Gameplay**: Players can reveal cells and flag potential mines easily. The game provides immediate feedback on actions.

**Leaderboard**: Keeps track of the top players for each game mode, showing their usernames, completion times, and the date they finished.

**Custom Mode**: Offers flexibility for players to create their own game settings, providing endless replayability.

**Error Handling**: Displays user-friendly error messages to ensure a smooth gaming experience.

**Flash Messages**: Provides real-time feedback with flash messages for errors and important notifications.

This Minesweeper game is designed to provide an enjoyable and challenging experience for players of all skill levels. Whether you're looking to pass the time with a quick game or challenge yourself with a custom setup, this game has something for everyone. Enjoy playing and see if you can top the leaderboard!

### Next steps and future improvements
- Add unit tests for components and functions
- Implement a login system to save player progress and scores
- Add possibility to real-time multiplayer games
- Implement a timer to track the player's completion time during the game
- Add sound effects and music to enhance the gaming experience
- Add animations and transitions for a more engaging user experience
