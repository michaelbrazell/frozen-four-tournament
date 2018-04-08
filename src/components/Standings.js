import React, { Component } from "react";
import Data from './data/bracketData.json';

const bracketData = Data;

class Standings extends Component {
  calculateBonus(bracketItem) {
    return (
      // eslint-disable-next-line
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
      // eslint-disable-next-line
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
  renderStandingsRow(bracketItem, index) {
    if (bracketItem.slug !== "official") {
      return (
        <tr key={bracketItem.slug}>
          <td>{bracketItem.name}</td>
          <td>{this.calculatePoints(bracketItem)}</td>
        </tr>
      )
    }
  }
  render() {
    return (
      <div>
        <h2 className="mb-3">Standings</h2>
        <table className="table table-striped standings-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <tbody>
            {bracketData.map((bracket, index) => (
              this.renderStandingsRow(bracket, index) 
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Standings;