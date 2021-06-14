import React from "react";
import { useState } from "react";

// data file
import { data } from "./data";
//CSS style files
import "../../css/propDigging.css";
const PropDigging = () => {
  const [people, setPeople] = useState(data);

  const removeOp = (id) => {
    setPeople((currentPeople) => {
      return currentPeople.filter((currentPerson) => currentPerson.id !== id);
    });
  };

  const NameList = ({ people, removeOp }) => {
    return (
      <>
        {people.map((person) => {
          return <SingleInfo key={person.id} {...person} removeOp={removeOp} />;
        })}
      </>
    );
  };

  const SingleInfo = ({ id, name, removeOp }) => {
    return (
      <h3>
        {name}
        <button className="remove" onClick={() => removeOp(id)}></button>
      </h3>
    );
  };

  return (
    <article>
      <h1>Props Digging</h1>
      <NameList people={people} removeOp={removeOp} />
    </article>
  );
};

export default PropDigging;
