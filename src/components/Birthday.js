import React from "react";
import { useState, Fragment } from "react";
// css style
import "../css/birthday.css";

// js files
import { people } from "../scripts/people";

const Birthday = () => {
  const [peopleBirthday, setPeople] = useState(people);
  return (
    <Fragment>
      <h1>Happy Birthday : {peopleBirthday.length}</h1>
      {peopleBirthday.map(({ id, image, date, name }) => {
        return (
          <section key={id}>
            <img src={image} alt="first date" />
            <article>
              <p>
                <span>{name}</span>
              </p>
              <p>
                <span>{date}</span>
              </p>
            </article>
          </section>
        );
      })}
      <button type="button" onClick={() => setPeople([])} className="btn">
        Clear
      </button>
    </Fragment>
  );
};

export default Birthday;
