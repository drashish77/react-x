import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Tony</div>;
    // return this.state.isLoggedIn ? (
    //   <div>Welcome James</div>
    // ) : (
    //   <div>Welcome Guests</div>
    // );
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div> Welcome Barati</div>;
    // } else {
    //   message = <div>Have fun</div>;
    // }

    // return <div>{message}</div>;
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Anurag</div>;
    // } else {
    //   return <div>Welcome Guests</div>;
    // }
    // return (
    //   <div>
    //     <h2>Welcome Ashish</h2>
    //     <div>Wecome Guests</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
