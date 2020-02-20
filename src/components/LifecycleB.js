import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ashish"
    };
    console.log("LifecycleB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB Get derived state from props");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB ComponentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }
  render() {
    console.log("LifecycleB render");

    return (
      <div>
        <h1>LifecycleB : {this.state.name} </h1>
      </div>
    );
  }
}

export default LifecycleB;
