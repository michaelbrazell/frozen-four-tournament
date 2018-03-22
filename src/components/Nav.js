import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            2018 Frozen Four Tournament
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active">
                  Brackets
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/standings" className="nav-link" activeClassName="active">
                  Standings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
