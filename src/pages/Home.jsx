// Home.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <ul>
        <li>
          <NavLink to="/countdown">Masala 1 - Countdown Timer</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Home;
