import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet name="Ashish" relName="Husband">
        <p>his is a child props</p>
      </Greet>
      <Greet name="Priyanka" relName="Wife">
        <button>Action</button>
      </Greet>
      <Greet name="Priya" relName="Sis in law" />
      <Welcome name="Amit" relName="Husband" />
      <Welcome name="Anuradha" relName="Wife" />
      <Welcome name="Anuj" relName="Son" /> */}
    </div>
  );
}

export default App;
