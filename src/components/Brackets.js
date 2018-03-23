import React, { Component } from "react";
import Bracket from "./Bracket.js";
import SubMenu from "./SubMenu.js";
import SelectMenu from "./SelectMenu.js";
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
            <div className="btn-group float-sm-right d-none d-sm-none d-lg-inline-flex" role="group">
              {bracketData.map((bracket, index) => (
                <SubMenu bracketData={bracket} key={index}/>
              ))}
            </div>
            <div className="btn-group d-lg-none float-sm-right" role="group" aria-label="Button group with nested dropdown">
              <div className="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Select a Bracket
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  {bracketData.map((bracket, index) => (
                    <SelectMenu bracketData={bracket} key={index} />
                  ))} 
                </div>
              </div>
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