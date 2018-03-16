import React, { Component } from "react";

class Brackets extends Component {
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
              <td>John</td>
              <td>32</td>
              <td>WIP</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Mike</td>
              <td>31</td>
              <td>WIP</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Kevin</td>
              <td>26</td>
              <td>WIP</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Chris</td>
              <td>23</td>
              <td>WIP</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Brackets;