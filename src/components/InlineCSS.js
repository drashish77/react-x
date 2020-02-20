import React from "react";

const InlineCSS = () => {
  const heading = {
    fontSize: "72px",
    color: "red"
  };
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  );
};

export default InlineCSS;
