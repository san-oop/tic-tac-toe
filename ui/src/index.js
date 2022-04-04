import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/home/Home';
import Game from './pages/game/Game';
import Create from './pages/create/Create';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game/create" element={<Create />} />
          <Route path="game/:id" element={<Game />} />
          <Route
            path="*"
            element={(
              <main>
                <p>Theres nothing here!</p>
              </main>
            )}
          />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
