import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/applications/Applications'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span title='close'>X</span>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Application/>
    </div>
  );
}

export default App;
