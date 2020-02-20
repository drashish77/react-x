import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      Password: "",
      Address: "",
      topic: "angular",
      signal: "red"
    };
  }

  userInputHandler = e => {
    this.setState({
      username: e.target.value
    });
  };

  passwordChangeHandler = event => {
    this.setState({
      Password: event.target.value
    });
  };
  textAreaChangeHandler = i => {
    this.setState({
      Address: i.target.value
    });
  };
  TopicChangeHandler = j => {
    this.setState({
      topic: j.target.value
    });
  };
  signalChangeHandler = i => {
    this.setState({
      signal: i.target.value
    });
  };
  submitHander = i => {
    alert(
      `${this.state.username} ${this.state.Password} ${this.state.Address} ${this.state.signal} ${this.state.topic}`
    );
    i.preventDefault();
  };

  render() {
    const { username, Password, signal, topic, Address } = this.state;
    return (
      <form onSubmit={this.submitHander}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={this.userInputHandler}
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="text"
            value={Password}
            onChange={this.passwordChangeHandler}
          />
        </div>
        <div>
          <label>Address</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={Address}
            onChange={this.textAreaChangeHandler}
          ></textarea>
        </div>
        <div>
          <label>Signal</label>
          <select value={signal} onChange={this.signalChangeHandler}>
            <option value="red">Hard</option>
            <option value="yello">Medium</option>
            <option value="green">Soft</option>
          </select>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.TopicChangeHandler}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
