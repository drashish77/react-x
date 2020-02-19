import React from "react";

const FunClick = () => {
  //   const clickHandler = () => {
  //     console.log("Button clicked");
  //   };
  function clickHandler() {
    console.log("Clicked hai");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default FunClick;
