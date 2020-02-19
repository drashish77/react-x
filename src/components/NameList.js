import React from "react";

const NameList = () => {
  const names = ["joe", "Melini", "Victoria", "dadi"];
  const nameList = names.map(i => <h2>{i}</h2>);
  return <div>{nameList}</div>;
};

export default NameList;
