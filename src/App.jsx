// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CountdownTimer from './pages/CountdownTimer';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route
            path="/countdown"
            element={<CountdownTimer></CountdownTimer>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
