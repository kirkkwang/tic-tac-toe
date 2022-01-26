import React, { Component } from "react";

export default class Emojis extends Component {
  render() {
    return (
      <>
        <label> Player 1 Input Your Emoji: </label>
        <input
          className="player1"
          type="text"
          value={this.props.player1Input}
          onChange={this.props.handleChangeP1}
        />
        <br></br>
        <label> Player 2 Input Your Emoji: </label>
        <input
          className="player2"
          type="text"
          onChange={this.props.handleChangeP2}
        />
      </>
    );
  }
}
