import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome {this.props.name} aka {this.props.relName}
        </h1>
      </div>
    );
  }
}

export default Welcome;
