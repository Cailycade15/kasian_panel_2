import React from 'react';
import './App.css';
import PanelComponent from "./components/Panel/PanelComponent";

function App() {
  return (
    <div className="App">
      <header>
          <h1 style={{textAlign: "center"}}>Casian Panel v2</h1>
      </header>
      <PanelComponent/>
    </div>
  );
}

export default App;
