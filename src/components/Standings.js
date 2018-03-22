import React, { Component } from "react";

class Standings extends Component {
  render() {
    return (
      <div>
        <h2 className="mb-3">Standings</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Points</th>
              <th>Win-Loss</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Name</td>
              <td>Score</td>
              <td>WIP</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Standings;