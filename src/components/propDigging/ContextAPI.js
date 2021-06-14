import React from "react";
import { useState, useContext, createContext } from "react";

// data file
import { data } from "./data";
//CSS style files
import "../../css/propDigging.css";

// 2 comp's first : provider  - second : consumer
const personContext = createContext();

const NameList = () => {
  const { people } = useContext(personContext);
  return (
    <section>
      {people.map((person) => {
        return <SingleInfo key={person.id} {...person} />;
      })}
    </section>
  );
};

const SingleInfo = ({ id, name }) => {
  const { removeOp } = useContext(personContext);
  return (
    <h3>
      {name}
      <button className="remove" onClick={() => removeOp(id)}></button>
    </h3>
  );
};

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removeOp = (id) => {
    setPeople((currentPeople) => {
      return currentPeople.filter((currentPerson) => currentPerson.id !== id);
    });
  };

  return (
    <personContext.Provider value={{ removeOp, people }}>
      <article>
        <h1>Props Digging</h1>
        <NameList />
      </article>
    </personContext.Provider>
  );
};

export default ContextAPI;
