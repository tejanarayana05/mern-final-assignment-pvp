import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Home from "./Components/Home";
import About from "./Components/About";
import Test from "./Components/tests";
import Memory from "./Components/memory/Memory";
import Response from "./Components/response/Response";
import Leaderboard from "./Components/leaderboard/leaderboard";
import './App.css';

const App = () => {
  return (
    <Router>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/memory">Memory</Link>
          </li>
          <li>
            <Link to="/response">Response</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/response" element={<Response />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
};

export default App;
