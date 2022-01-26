import React, { Component } from "react";

export default class Restart extends Component {
  render() {
    return (
      <div className="restart">
        <button onClick={this.props.handleRestart}>Restart</button>
      </div>
    );
  }
}
