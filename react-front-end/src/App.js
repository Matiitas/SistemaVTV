import React from "react";
//import React, { Component } from "react"; para poner solo Component
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

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Usuario" name="username" />
        <input type="password" placeholder="Contraseña" name="psw" />
        <button type="submit">Entrar</button>
      </div>
    );
  }
}

export default App;

/* function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Usuario" name="username" />
      <input type="password" placeholder="Contraseña" name="psw" />
      <button type="submit">Entrar</button>
    </div>
  );
} */
