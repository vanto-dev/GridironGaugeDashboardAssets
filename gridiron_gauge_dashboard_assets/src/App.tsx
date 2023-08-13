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
        </p>
        <TabsList />
      </header>
    </div>
  )
}

export default App
