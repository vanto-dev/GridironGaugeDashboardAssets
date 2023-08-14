import React from "react"
import "./App.css"
import footballImage from "./football.png"
import TabsList from "./components/TabsList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={footballImage} className="App-logo" alt="logo" />
        <p>
          Hi, Welcome to Gridiron Gauge.
          <p className = "description"> The goal of this page is to help identify players who might have value. <br />
              I use last season's stats, combined with age trends to assign scores</p>
        </p>
        <TabsList />
      </header>
    </div>
  )
}

export default App
