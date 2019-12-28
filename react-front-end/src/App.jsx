import React from "react";
//import React, { Component } from "react"; para poner solo Component
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import MenuLateral from "./components/menuLateral";
import Inicio from "./components/inicio";

class App extends React.Component {
  state = {
    menuLateralClasses: ""
  };

  menuLateralOpened = false;

  constructor(props) {
    super(props);
    this.handleSwitchMenuLateral = this.handleSwitchMenuLateral.bind(this);
  }

  handleSwitchMenuLateral(e) {
    this.menuLateralOpened = !this.menuLateralOpened;
    if (this.menuLateralOpened) {
      /* Agrego la clase que realiza la animacion de abrirse */
      this.setState({ menuLateralClasses: " desplazamiento-abrirse" });
    } else {
      /* Agrego la clase que realiza la animacion de cerrarse */
      this.setState({
        menuLateralClasses: " desplazamiento-abrirse desplazamiento-cerrarse"
      });
      /* Programo un borrado, para que se vuelva a su estado incial (antes de dar click para abrirse) */
      setTimeout(
        function() {
          this.setState({ menuLateralClasses: "" });
        }.bind(this),
        250
      );
    }
  }

  render() {
    return (
      <Router>
        <div className="box bg-dark-gray text-white">
          {/* Navbar */}
          <Navbar onSwitchMenuLateral={this.handleSwitchMenuLateral} />

          {/* Menu Lateral */}
          <MenuLateral
            menuLateralClasses={this.state.menuLateralClasses}
            onSwitchMenuLateral={this.handleSwitchMenuLateral}
          />

          {/* Pagina de logueo */}
          <Switch>
            {/* 
              exact me permite que No se rederizen 2 componenetes al mismo tiempo. 
              sin exact: si navego a "/ingresar" me tome el "/" como valido para renderizar Inicio (ademas de Login)
              (no le importa si despues de "/" hay algo mas) 
            */}
            <Route path="/" exact component={Inicio} />
            <Route path="/ingresar" component={Login} />
          </Switch>
          {/* Pie de pagina */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
