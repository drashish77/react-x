import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     return (
//       <div>
//         <h2>
//           Welcome to this special world: {this.props.name}. You are my{" "}
//           {this.props.relName}
//           {". "}
//         </h2>
//         {this.props.children}
//       </div>
//     );
//   }
// }

// Generally destructure it in render
class Welcome extends Component {
  render() {
    const { name, relName, children } = this.props;
    // const { state1, state2, state4 } = this.state;
    return (
      <div>
        <h2>
          Welcome to this special world: {name}. You are my {relName}
          {". "}
        </h2>
        {children}
      </div>
    );
  }
}
// class Welcome extends Component {
//   render() {
//     return (
//       <div>
//         <h2>
//           Welcome to this special world: {this.props.name}. You are my{" "}
//           {this.props.relName}
//           {". "}
//         </h2>
//         {this.props.children}
//       </div>
//     );
//   }
// }

export default Welcome;
