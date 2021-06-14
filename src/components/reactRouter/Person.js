/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// file
import { data } from "./data";

const Person = () => {
  const { id } = useParams();

  const [name, setName] = useState("");

  useEffect(() => {
    const fetchedPerson = data.find((person) => person.id === +id);
    setName(fetchedPerson.name);
  }, []);

  return (
    <>
      <section>
        <h4 className="person">{name}</h4>
      </section>
      <Link className="btn person" to="/people">
        Back to People
      </Link>
    </>
  );
};

export default Person;
