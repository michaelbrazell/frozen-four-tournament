import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/App.css';
import Nav from './components/Nav';
import Brackets from './components/Brackets';
import Standings from './components/Standings';
import About from './components/About';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
        render={({ location, props }) => (
          <div className="app-wrapper">
            <Nav />
            <div className="container-fluid">  
              <section className="fix-container">
                <div className="container-fluid">
                  <Switch location={location}>
                    <Route exact path="/" component={Brackets} />
                    <Route exact path="/standings" component={Standings} />
                    <Route exact path="/about" component={About} />
                    <Route component={NoMatch}/>
                  </Switch>
                </div>
              </section>
            </div>
          </div>
        )}
        />
      </Router>
    );
  }
}

export default App;
