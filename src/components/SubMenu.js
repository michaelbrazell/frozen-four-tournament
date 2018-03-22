import React, { Component } from "react";

class SubMenu extends Component {
  render() {
    return (
      <div className="btn-group float-sm-right" role="group" aria-label="Basic example">
        <a href="#Mike" className="btn btn-secondary">Mike</a>
        <a href="#Chris" className="btn btn-secondary">Chris</a>
        <a href="#Kevin" className="btn btn-secondary">Kevin</a>
        <a href="#John" className="btn btn-secondary">John</a>
      </div>      
    );
  }
}

export default SubMenu;