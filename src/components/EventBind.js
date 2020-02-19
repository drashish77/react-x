import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello"
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      message: "Visit again"
    });
    console.log(this);
  }
  //   clickHandler = () => {
  //     this.setState({
  //       message: "Welcome back"
  //     });
  //   };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>This is a button</button> */}
        <br />
        {/* <button onClick={() => this.clickHandler()}>Hoo LAA laA </button> */}
        <button onClick={this.clickHandler}>Jai Ho </button>
      </div>
    );
  }
}

export default EventBind;
