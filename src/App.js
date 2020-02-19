import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Color from "./components/Color";
import FunClick from "./components/FunClick";
import ClassClicked from "./components/ClassClicked";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="App">
      <PersonList />
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunClick />
      <ClassClicked /> */}
      {/* <Color name="Ashish" hubbyOf="Priyanka">
        <p>We are in Love</p>
        <button>Action</button>
      </Color>
      <Color name="Varun" /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Ashish" relName="Husband">
        <p>his is a child props</p>
      </Greet>
      <Greet name="Priyanka" relName="Wife">
        <button>Action</button>
      </Greet>
      <Greet name="Priya" relName="Sis in law" />
      <Welcome name="Amit" relName="Husband" />
      <Welcome name="Anuradha" relName="Wife" /> */}
      {/* <Welcome name="Anuj" relName="Son">
        <p>This is our lovely world.</p>
      </Welcome> */}
    </div>
  );
}

export default App;
