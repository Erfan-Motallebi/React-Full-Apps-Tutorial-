import React from "react";
import PropTypes from "prop-types";
// using my custom hook called useFetch to do the fetching
import { useFetch } from "../customHooks/useFetch";

// peope data && css
import "../../css/propKinds.css";
const url = "http://localhost:3002/userInfo";

const PeopleList = () => {
  const { items } = useFetch(url);

  return (
    <React.Fragment>
      <section>
        <ul>
          {items.map((person) => {
            return <SinglePerson {...person} key={person.id} />;
          })}
        </ul>
      </section>
    </React.Fragment>
  );
};

const SinglePerson = ({ name, email }) => {
  return (
    <li>
      <h2>
        <span>{name}</span>
        <span>{email}</span>
      </h2>
    </li>
  );
};

SinglePerson.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

SinglePerson.defaultProps = {
  name: "Default Person",
  email: "Default@gmail.com",
  id: new Date().getTime().toString(),
};
const PropKinds = () => {
  return (
    <>
      <PeopleList />
    </>
  );
};

export default PropKinds;
