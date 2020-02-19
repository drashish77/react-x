import React from "react";

const Person = ({ i }) => {
  return (
    <div>
      <p>
        I am {i.name} I am {i.age} years old. My id is {i.id}. i am skilled at-
        {i.skill}
      </p>
    </div>
  );
};

export default Person;
