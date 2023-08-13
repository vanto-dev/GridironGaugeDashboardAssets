import React from 'react';
import './App.css';
import PlayerEntry from "./components/PlayerEntry";
import footballImage from "./football.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={footballImage} className="App-logo" alt="logo" />
        <p>
          Hi, Welcome to Gridiron Gauge.
        </p>
          <PlayerEntry></PlayerEntry>
      </header>
    </div>
  );
}

export default App;
