import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
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
      <div className="seccion contenido container-fluid h-100">
        <div className="row justify-content-center h-100">
          <div className="col col-sm-6 col-md-4 align-self-center">
            <h1 className="text-center">Sistema VTV</h1>
            <div>
              <div className="form-group">
                <label htmlFor="username">Usuario</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Usuario"
                  name="username"
                  id="username"
                  value={this.state.value}
                  onChange={this.handleChangeUsr}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Contraseña"
                  name="psw"
                  id="psw"
                  value={this.state.value}
                  onChange={this.handleChangePsw}
                />
              </div>

              <button
                className="btn btn-success btn-block"
                onClick={() => this.handleClick()}
                type="submit"
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
