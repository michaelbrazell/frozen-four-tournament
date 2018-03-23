import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            2018 Frozen Four Tournament
          </Link>
          <div className="foo">
            <ul className="navbar-nav nav ml-auto d-inline-flex">
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
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeClassName="active">
                  About
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
