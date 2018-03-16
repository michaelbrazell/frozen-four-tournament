import React, { Component } from "react";
import Game from "./Game.js";

const bracketData =
[
  {
    "name":"Official",
    "winner":"Team Name",
    "points":0,
    "max-points":0,
    "gameData":[
      {
        "game":1,
        "time":"6:00",
        "team1Seed":12,
        "team2Seed":13,
        "team1":"La Salle",
        "team2":"Massachusetts",
        "teamScore1":"",
        "teamScore2":"",
        "prediction":"",
        "actualWinner":"Massachusetts",
        "baseValue":2
      },
      {
        "game":2,
        "time":"8:30",
        "team1Seed":11,
        "team2Seed":14,
        "team1":"Ge. Washington",
        "team2":"Fordam",
        "teamScore1":"",
        "teamScore2":"",
        "prediction":"",
        "actualWinner":"Ge. Washington",
        "baseValue":2
      },
      {
        "game":3,
        "time":"12:00",
        "team1Seed":8,
        "team2Seed":9,
        "team1":"VCU",
        "team2":"Dayton",
        "teamScore1":"",
        "teamScore2":"",
        "prediction":"",
        "actualWinner":"VCU",
        "baseValue":3
      },
      {
        "game":4,
        "time":"2:30",
        "team1Seed":5,
        "team2Seed":0,
        "team1":"George Mason",
        "team2":"Massachusetts",
        "teamScore1":"",
        "teamScore2":"",
        "prediction":"",
        "actualWinner":"George Mason",
        "baseValue":3
      },
      {
        "game":5,
        "time":"6:00",
        "team1Seed":7,
        "team2Seed":10,
        "team1":"Richmond",
        "team2":"Duquesne",
        "teamScore1":"",
        "teamScore2":"",
        "prediction":"",
        "actualWinner":"Richmond",
        "baseValue":3
      },
      {
        "game":6,
        "time":"8:30",
        "team1Seed":6,
        "team2Seed":11,
        "team1":"St. Louis",
        "team2":"Ge. Washington",
        "teamScore1":"",
        "teamScore2":"",
        "prediction":"",
        "actualWinner":"St. Louis",
        "baseValue":3
      },
      {
        "game":7,
        "time":"12:00",
        "team1Seed":1,
        "team2Seed":8,
        "team1":"Rhode Island",
        "team2":"VCU",
        "teamScore1":"",
        "teamScore2":"",
        "prediction":"",
        "actualWinner":"Rhode Island",
        "baseValue":5
      },
      {
        "game":8,
        "time":"2:30",
        "team1Seed":5,
        "team2Seed":4,
        "team1":"George Mason",
        "team2":"St. Joseph's",
        "teamScore1":"",
        "teamScore2":"",
        "prediction":"",
        "actualWinner":"St. Joseph's",
        "baseValue":5
      },
      {
        "game":9,
        "time":"6:00",
        "team1Seed":2,
        "team2Seed":7,
        "team1":"St. Bonaventure",
        "team2":"Richmond",
        "teamScore1":"",
        "teamScore2":"",
        "prediction":"",
        "actualWinner":"St. Bonaventure",
        "baseValue":5
      },
      {
        "game":10,
        "time":"8:30",
        "team1Seed":6,
        "team2Seed":3,
        "team1":"St. Louis",
        "team2":"Davidson",
        "teamScore1":"",
        "teamScore2":"",
        "prediction":"",
        "actualWinner":"Davidson",
        "baseValue":5
      },
      {
        "game":11,
        "time":"1:00",
        "team1Seed":1,
        "team2Seed":4,
        "team1":"Rhode Island",
        "team2":"St. Josephs",
        "teamScore1":"",
        "teamScore2":"",
        "prediction":"",
        "actualWinner":"Rhode Island",
        "baseValue":8
      },
      {
        "game":12,
        "time":"3:30",
        "team1Seed":2,
        "team2Seed":3,
        "team1":"St. Bonaventure",
        "team2":"Davidson",
        "teamScore1":"",
        "teamScore2":"",
        "prediction":"",
        "actualWinner":"Davidson",
        "baseValue":8
      },
      {
        "game":13,
        "time":"1:00",
        "team1Seed":1,
        "team2Seed":2,
        "team1":"Rhode Island",
        "team2":"Davidson",
        "teamScore1":"",
        "teamScore2":"",
        "prediction":"",
        "actualWinner":"Davidson",
        "baseValue":13
      }
    ]
  }
]

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
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <h4>March 7 <span className="badge badge-secondary float-right">2</span></h4>
                <hr />
                { this.renderGame(bracket, 1) }
                { this.renderGame(bracket, 2) }
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <h4>March 8 <span className="badge badge-secondary float-right">3</span></h4>
                <hr />
                { this.renderGame(bracket, 3) }
                { this.renderGame(bracket, 4) }
                { this.renderGame(bracket, 5) }
                { this.renderGame(bracket, 6) }
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <h4>March 9 <span className="badge badge-secondary float-right">5</span></h4>
                <hr />
                { this.renderGame(bracket, 7) }
                { this.renderGame(bracket, 8) }
                { this.renderGame(bracket, 9) }
                { this.renderGame(bracket, 10) }
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <h4>March 10 <span className="badge badge-secondary float-right">8</span></h4>
                <hr />
                { this.renderGame(bracket, 11) }
                { this.renderGame(bracket, 12) }
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <h4>March 11 <span className="badge badge-secondary float-right">13</span></h4>
                <hr />
                { this.renderGame(bracket, 13) }
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <h4>Bracket - {bracket.name}</h4>
                <hr/>
                <ul className={ bracket.name === "Official" ? "d-none" : "list-inline mb-0"}>
                  <li className="list-inline-item">
                    Max Base Points: <span className="badge badge-secondary">{ this.calculateBasePoints(bracket) }</span>
                  </li>
                  <li className="list-inline-item">
                    Max Bonus Points: <span className="badge badge-secondary">{ this.calculateBonusPoints(bracket) }</span>
                  </li>
                  <li className="list-inline-item">
                    Max Points: <span className="badge badge-secondary">{ this.calculateMaxPoints(bracket) }</span>
                  </li>
                </ul>
                <div className="card game-winner">
                  <div className="card-header">Winner</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{bracket.winner}</li>
                    <li className="list-group-item">
                      Points: 
                    </li>
                  </ul>
                </div>
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