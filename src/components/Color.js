import React from "react";

// normal used method
const Color = props => {
  return (
    <div>
      <h2>
        I am a web designer: {props.name} {props.hubbyOf}
      </h2>
      {props.children}
    </div>
  );
};

// (Destructure it in the function parameter itself)
// const Color = ({ name, hubbyOf, children }) => {
//   return (
//     <div>
//       <h2>
//         I am a web designer: {name} {hubbyOf}
//       </h2>
//       {children}
//     </div>
//   );
// };

// (Destructure it in the function body)

// const Color = props => {
//   const { name, hubbyOf, children } = props;
//   return (
//     <div>
//       <h2>
//         I am a web designer: {name} {hubbyOf}
//       </h2>
//       {children}
//     </div>
//   );
// };

export default Color;
