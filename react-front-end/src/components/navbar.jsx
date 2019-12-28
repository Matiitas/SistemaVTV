import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="seccion encabezado shadow-sm rounded bg-dark-gray-nav">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="d-flex">
            <span
              className="pt-7px mr-2 cursor-pointer"
              onClick={e => this.props.onSwitchMenuLateral(e)}
            >
              <svg
                style={{
                  width: "26px",
                  height: "26px",
                  fill: "white"
                }}
                viewBox="0 0 24 24"
                className="_231hs undefined"
              >
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
              </svg>
            </span>

            <a className="navbar-brand" href="#">
              Sistema VTV
            </a>
          </div>

          <ul className="navbar-nav mr-auto">
            <Link to="/">
              <li className="nav-item mr-1 active">
                <a className="nav-link" href="#">
                  Inicio <span className="sr-only">(current)</span>
                </a>
              </li>
            </Link>
            <li className="nav-item mr-1">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="align-self-center">
              <Link to="/ingresar">
                <button className="btn btn-sm btn-outline-success">
                  Ingresar
                </button>
              </Link>
            </li>
            <li className="ml-2">
              <a className="nav-link" href="#">
                Registrarse
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
