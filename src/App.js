import React, { Component } from "react";
import Square from "./components/Square";
import "./App.css";
import Restart from "./components/Restart";
import Emojis from "./components/Emojis";

const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const found = (arr1, arr2) => {
  return arr1.every((value) => arr2.includes(value));
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      player: this.player1Turn,
      player1Ticks: [],
      player2Ticks: [],
      player1Input: "X",
      player2Input: "O",
      gameOver: false,
    };
  }

  player1Turn = `Player 1's Turn!`;
  player2Turn = `Player 2's Turn!`;

  handleTurns = (idx) => {
    const { squares, player, player1Ticks, player2Ticks } = this.state;
    if (squares[idx] === "") {
      player === this.player1Turn
        ? (squares[idx] = this.state.player1Input)
        : (squares[idx] = this.state.player2Input);
      this.setState({
        squares: squares,
        player:
          player === this.player1Turn ? this.player2Turn : this.player1Turn,
        player1Ticks:
          player === this.player1Turn ? [...player1Ticks, idx] : player1Ticks,
        player2Ticks:
          player === this.player2Turn ? [...player2Ticks, idx] : player2Ticks,
      });
    }
  };

  handleWinning = () => {
    for (let i = 0; i < winning.length; i++) {
      if (found(winning[i], this.state.player1Ticks)) {
        this.setState({
          squares: this.state.squares.map((value) =>
            value === "" ? null : value
          ),
          player: "Player 1 wins!",
          gameOver: true,
        });
        break;
      } else if (found(winning[i], this.state.player2Ticks)) {
        this.setState({
          squares: this.state.squares.map((value) =>
            value === "" ? null : value
          ),
          player: "Player 2 wins!",
          gameOver: true,
        });
        break;
      } else if (
        (this.state.player !== "Player 1 wins!" &&
          !this.state.squares.includes("") &&
          !this.state.squares.includes(null)) ||
        (this.state.player !== "Player 2 wins!" &&
          !this.state.squares.includes("") &&
          !this.state.squares.includes(null))
      ) {
        this.setState({ player: "The match was a draw...", gameOver: true });
      }
    }
  };

  handleRestart = () => {
    document.getElementById("emojis").reset();
    this.setState({
      squares: Array(9).fill(""),
      player: this.player1Turn,
      player1Ticks: [],
      player2Ticks: [],
      player1Input: "X",
      player2Input: "O",
    });
  };

  handleChangeP1 = (e) => {
    this.setState({
      player1Input:
        this.state.player1Input === this.state.player2Input
          ? "X"
          : e.target.value,
    });
  };

  handleChangeP2 = (e) => {
    if (this.state.player1Input !== this.state.player2Input) {
      this.setState({ player2Input: e.target.value });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.player !== this.state.player) {
      this.handleWinning();
    }
  }

  render() {
    return (
      <>
        <h1 className="header">Tic Tac Toe</h1>
        <h3 className="turns">{this.state.player}</h3>
        <form id="emojis">
          <Emojis
            handleChangeP1={this.handleChangeP1}
            handleChangeP2={this.handleChangeP2}
          />
        </form>
        <div className="gameboard">
          {this.state.squares.map((value, idx) => (
            <Square
              value={value}
              key={idx}
              idx={idx}
              handleTurns={this.handleTurns}
              handleWinning={this.handleWinning}
            />
          ))}
        </div>
        <Restart handleRestart={this.handleRestart} />
      </>
    );
  }
}
export default App;
