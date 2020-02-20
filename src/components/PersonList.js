import React from "react";
import Person from "./Person";

const PersonList = () => {
  const persons = [
    {
      id: 1,
      name: "Khushbu",
      age: 22,
      skill: "Generalist"
    },
    {
      id: 2,
      name: "Ashish",
      age: 45,
      skill: "Angular"
    },
    {
      id: 3,
      name: "priyanka",
      age: 33,
      skill: "React"
    },
    {
      id: 4,
      name: "Arun",
      age: 34,
      skill: "Prostho"
    },
    {
      id: 5,
      name: "Kamla",
      age: 55,
      skill: "Household"
    }
  ];
  const personList = persons.map(i => <Person key={i.id} i={i} />);
  return <div>{personList}</div>;
};

export default PersonList;
