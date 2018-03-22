import React, { Component } from "react";
import Data from './data/bracketData.json';

const bracketData = Data;

class Standings extends Component {
  calculateBonus(bracketItem) {
    return (
      bracketItem.gameData.filter((game, index) => {
        if (game.actualWinner === game.prediction) {
          if ((game.actualWinner.length > 0) && ((game.prediction === game.team1 && game.team1Seed > game.team2Seed) || (game.prediction === game.team2 && game.team2Seed > game.team1Seed))) {
            return game
          }
        }
      }).reduce((prevVal, game) => {
        return prevVal + Math.abs(game.team1Seed - game.team2Seed)
      }, 0)
    )
  }
  calculatePoints(bracketItem) {
    return (
      bracketItem.gameData.filter((game, index) => {
        if (game.actualWinner === game.prediction) {
          return game
        }
      }).reduce((prevVal, game) => {
        return prevVal + game.baseValue
      }, this.calculateBonus(bracketItem))
    )
  }
  calculateWinLoss(bracketItem) {
    // Calculate Win Loss Here
  }
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
            {bracketData.map((bracket, index) => (
              <tr key={bracket.slug}>
                <th scope="row">{index + 1}</th>
                <td>{bracket.name}</td>
                <td>{this.calculatePoints(bracket)}</td>
                <td>WIP</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Standings;