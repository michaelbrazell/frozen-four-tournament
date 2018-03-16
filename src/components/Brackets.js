import React, { Component } from "react";
import Bracket from "./Bracket.js";

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
              <a href="#Mike" className="btn btn-secondary">Mike</a>
              <a href="#Chris" className="btn btn-secondary">Chris</a>
              <a href="#Kevin" className="btn btn-secondary">Kevin</a>
              <a href="#John" className="btn btn-secondary">John</a>
            </div>
          </div>
        </div> 
        <hr />
        <Bracket bracketName="Official" />
      </div>
    );
  }
}

export default Brackets;