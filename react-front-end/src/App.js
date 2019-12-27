import React from "react";
import axios from "axios";
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
  state = {
    username: null,
    password: null
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeUsr = this.handleChangeUsr.bind(this);
    this.handleChangePsw = this.handleChangePsw.bind(this);
  }

  handleChangeUsr(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePsw(event) {
    this.setState({ password: event.target.value });
  }

  handleClick() {
    axios
      .post("http://localhost:8000/api/auth/login/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Usuario"
          name="username"
          value={this.state.value}
          onChange={this.handleChangeUsr}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="psw"
          value={this.state.value}
          onChange={this.handleChangePsw}
        />
        <button onClick={() => this.handleClick()} type="submit">
          Entrar
        </button>
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
