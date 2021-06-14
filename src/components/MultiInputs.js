import React from "react";
import { useState, Fragment } from "react";
// css style
import "../css/multiInputs.css";
const MultiInputs = () => {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
  });
  const [people, setPeople] = useState([]);

  const onChangeController = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;

    // modern way to get the result of an event handler using object destructring
    const { name, value } = e.target;
    // console.log(name, value);
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.firstName && person.email) {
      setPeople([
        ...people,
        { ...person, id: new Date().getTime().toString() },
      ]);
      setPerson({ age: "", firstName: "", email: "" });
    } else {
      alert("Empty Field(s) found");
    }
  };
  const PeopleShow = () => {
    return (
      <div>
        {people.map(({ id, firstName, email, age }) => {
          return (
            <section key={id}>
              <p>
                {firstName} <span className="age">{age}</span>
              </p>
              <p>{email}</p>
            </section>
          );
        })}
      </div>
    );
  };

  return (
    <Fragment>
      <article>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">Name : </label>
          <input
            type="text"
            value={person.firstName}
            name="firstName"
            id="firstName"
            onChange={onChangeController}
          />{" "}
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            value={person.email}
            name="email"
            id="email"
            onChange={onChangeController}
          />{" "}
          <br />
          <label htmlFor="age">Age : </label>
          <input
            type="text"
            value={person.age}
            name="age"
            id="age"
            onChange={onChangeController}
          />
          <button className="btn">Send</button>
        </form>
      </article>
      <PeopleShow />
    </Fragment>
  );
};

export default MultiInputs;
