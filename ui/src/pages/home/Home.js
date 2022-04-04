// import { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const activeGames = [
  {
    name: 'game 1',
    roomId: 213,
  },
  {
    name: 'game 2',
    roomId: 214,
  },
  {
    name: 'game 3',
    roomId: 215,
  },
];

const waitingRooms = [
  {
    name: 'game 1',
    roomId: 213,
  },
  {
    name: 'game 2',
    roomId: 214,
  },
  {
    name: 'game 3',
    roomId: 215,
  },
];

function Home() {
  const handleWatchGame = () => {
    console.log('clicked join');
  };

  const handleCreateNewRoom = () => {
    console.log('clicked create');
  };

  return (
    <>
      <div className="active-games-list">
        <div>
          <h2>Active Games</h2>
        </div>
        <div>
          {activeGames.map((game) => (
            <div className="game-item" key={game.roomId}>
              <div>{game.name}</div>
              <button type="button" onClick={handleWatchGame}>
                Watch
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="active-games-list">
        <div>
          <h2>Waiting Room</h2>
        </div>
        <div>
          {waitingRooms.map((game) => (
            <div className="game-item" key={game.roomId}>
              <div>{game.name}</div>
              <button type="button" onClick={handleWatchGame}>
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
      <Link to="/game/create">
        <button
          className="add-button"
          type="button"
          onClick={handleCreateNewRoom}
        >
          <FaPlus className="plus-icon" />
        </button>
      </Link>
    </>
  );
}

export default Home;
