import React from "react";
import logo from "./logo.svg";
import "./App.css";

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
} */

function App() {
  return (
    <div className="App">
      <div className="login">
        <input type="text" placeholder="Usuario" name="username" />
        <input type="text" placeholder="Contraseña" name="psw" />
        <button type="submit">Entrar</button>
      </div>
    </div>
  );
}

export default App;
