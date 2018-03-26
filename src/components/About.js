import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-8">
          <h2 className="mb-3">About this Site</h2>
          <h3>Scoring</h3>
          <p>A correct pick in each round is worth a specific number of points, which is printed next to the header of each round.  This follows 
          a <a href="https://en.wikipedia.org/wiki/Fibonacci_number" target="_blank" rel="noopener noreferrer">fibbonacci sequence</a> for rewarding correct picks in later rounds, without under-valuing early rounds.</p>
          <ul>
            <li>First: 3pts/correct pick</li>
            <li>Second: 5pts/correct pick</li>
            <li>Third: 8pts/correct pick</li>
            <li>Championship: 13pts/correct pick</li>
          </ul>
          <p>A <em>bonus</em> is added to each correct pick where an underdog seed upsets a favorite.  The bonus is calculated by subtracting the higher seed from the lower seed.
          For instance, if #4 Air Force upsets #1 Saint Cloud St., correctly picking that game would also provide a bonus of 3 additional points.</p>
          <p>Points are displayed beside the name of each bracket</p>
          <p><strong>Note</strong>: Your submitted bracket is the source of truth, typoes or mistakes might lead to inaccurate scores, which I'll try to fix
          as soon as they're noticed.</p>
          <hr />
          <h3>Updates</h3>
          <p>This site is not automatically updated with live results, it is manually updated approximately once a day, sometimes more often, after games are played.
          To view all of the changes sequentially, visit the <a href="https://github.com/michaelbrazell/frozen-four-tournament/commits/master" target="_blank" rel="noopener noreferrer">Github Repository</a>.</p>
          <p>If you notice any mistakes or have any requests, email me at <a href="mailto: michaelbrazell@gmail.com">michaelbrazell@gmail.com</a></p>
          <hr />
          <h3>Experiments</h3>          
        </div>
      </div>
    );
  }
}

export default About;