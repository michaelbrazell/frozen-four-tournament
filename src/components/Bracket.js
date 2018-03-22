import React, { Component } from "react";
import Game from "./Game.js";
import Data from './data/bracketData.json';

const bracketData = Data;

class Bracket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bracketName: this.props.bracketName
    };
  }
  renderGame(bracketItem, gameNumber) {
    return (
      bracketItem.gameData.map( (item, index) => {
        if (item.game === gameNumber) {
          return (
            <Game 
              key={index}
              number={item.game} 
              time={item.time} 
              team1Seed={item.team1Seed} 
              team2Seed={item.team2Seed} 
              team1={item.team1} 
              team2={item.team2} 
              team1Score={item.team1Score} 
              team2Score={item.team2Score}
              prediction={item.prediction}
              actualWinner={item.actualWinner}
              baseValue={item.baseValue}
            />
          )
        }
      })
    )
  }
  calculateBasePoints(bracketItem) {
    return (
      bracketItem.gameData.reduce( (points, game, index, bracketItem) => {
        return points += game.baseValue
      }, 0)
    )
  }
  calculateBonusPoints(bracketItem) {
    return (
      bracketItem.gameData.filter( (game, index) => {
        if ( (game.prediction === game.team1 && game.team1Seed > game.team2Seed) || (game.prediction === game.team2 && game.team2Seed > game.team1Seed) ) {
          return game
        }
      }).reduce((prevVal, game) => {
        return prevVal + Math.abs(game.team1Seed - game.team2Seed)
      }, 0)
    )
  }
  calculateMaxPoints(bracketItem) {
    return this.calculateBasePoints(bracketItem) + this.calculateBonusPoints(bracketItem)
  }
  calculateBonus(bracketItem) {
    return (
      bracketItem.gameData.filter( (game, index) => {
        if ( game.actualWinner === game.prediction ) {
          if ( (game.actualWinner.length > 0) && ( (game.prediction === game.team1 && game.team1Seed > game.team2Seed) || (game.prediction === game.team2 && game.team2Seed > game.team1Seed) )  ) {
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
      bracketItem.gameData.filter( (game, index) => {
        if ( game.actualWinner === game.prediction ) {
          return game
        }
      }).reduce((prevVal, game) => {
        return prevVal + game.baseValue
      }, this.calculateBonus(bracketItem))
    )
  }
  render() {
    return (
      <div>
        { bracketData.map( (bracket, index) => (
          <div key={index}>
            <h3 className="display-4 mb-3" id={bracket.name}><span className={ bracket.name === "Official" ? "d-none" : "badge badge-secondary"}>{ this.calculatePoints(bracket) }</span> Bracket - {bracket.name} </h3>                
            <div className="row bracket-group">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <h4>First Round <span className="badge badge-secondary float-right">3</span></h4>
                <hr />
                { this.renderGame(bracket, 1) }
                { this.renderGame(bracket, 2) }
                { this.renderGame(bracket, 3) }
                { this.renderGame(bracket, 4) }
                { this.renderGame(bracket, 5) }
                { this.renderGame(bracket, 6) }
                { this.renderGame(bracket, 7) }
                { this.renderGame(bracket, 8) }
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <h4>Quarterfinals <span className="badge badge-secondary float-right">5</span></h4>
                <hr />
                { this.renderGame(bracket, 9) }
                { this.renderGame(bracket, 10) }
                { this.renderGame(bracket, 11) }
                { this.renderGame(bracket, 12) }
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <h4>Semifinals <span className="badge badge-secondary float-right">8</span></h4>
                <hr />
                
                { this.renderGame(bracket, 13) }
                { this.renderGame(bracket, 14) }
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <h4>Championship <span className="badge badge-secondary float-right">13</span></h4>
                <hr />
                { this.renderGame(bracket, 15) }
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    )
  }
}

export default Bracket;