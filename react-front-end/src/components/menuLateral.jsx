import React, { Component } from "react";

class MenuLateral extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className={"menuLateral" + this.props.menuLateralClasses}></div>
        {/* Fondo cuando se abre el menu lateral */}
        <div
          className={"difuminacion".concat(
            this.props.menuLateralClasses === " desplazamiento-abrirse"
              ? " visible"
              : " invisible"
          )}
          onClick={e => this.props.onSwitchMenuLateral(e)}
        ></div>
      </React.Fragment>
    );
  }
}

export default MenuLateral;
