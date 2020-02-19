import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  increment = () => {
    // this.setState({
    //   count: this.state.count + 1
    // });
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
    console.log(this.state.count);
  };
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <div>Count -{this.state.count} </div>
        <button onClick={() => this.increment()}>Connt Inc</button>
        <button onClick={() => this.incrementFive()}>Connt 5</button>
      </div>
    );
  }
}

export default Counter;
