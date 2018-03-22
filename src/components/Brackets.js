import React, { Component } from "react";
import Bracket from "./Bracket.js";
import SubMenu from "./SubMenu.js";
import Data from './data/bracketData.json';

const bracketData = Data;

class Brackets extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h2 className="mb-3">Brackets</h2>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="btn-group float-sm-right" role="group" aria-label="Basic example">
              {bracketData.map((bracket, index) => (
                <SubMenu bracketData={bracket} key={index}/>
              ))}
            </div>
          </div>
        </div> 
        <hr />
        {bracketData.map((bracket, index) => (
          <div key={index}>
            <Bracket bracketData={bracket} />
          </div>
        ))}
      </div>
    );
  }
}

export default Brackets;