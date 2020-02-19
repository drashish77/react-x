import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "I care for you"
    };
  }
  increaseMessage() {
    this.setState(prevState => ({
      message: prevState.message + "💖💕💓"
    }));
    // this.setState({
    //   message: "This is awesome"
    // });
  }

  render() {
    return (
      <div>
        <p>My message is: {this.state.message}</p>
        <button onClick={() => this.increaseMessage()}>Inc Message</button>
      </div>
    );
  }
}

export default Message;
