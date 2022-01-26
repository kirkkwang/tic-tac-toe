import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <>
        <div
          onClick={() => this.props.handleTurns(this.props.idx)}
          className="square"
        >
          {this.props.value}
        </div>
      </>
    );
  }
}
export default Square;
