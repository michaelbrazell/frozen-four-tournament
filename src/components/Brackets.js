import React, { Component } from "react";
import Bracket from "./Bracket.js";
import SubMenu from "./SubMenu.js";
// import Data from './data/bracketData.json';

// const bracketData = Data;

class Brackets extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h2 className="mb-3">Brackets</h2>
          </div>
          <div className="col-xs-12 col-sm-6">
            <SubMenu />
          </div>
        </div> 
        <hr />
        <Bracket />
      </div>
    );
  }
}

export default Brackets;