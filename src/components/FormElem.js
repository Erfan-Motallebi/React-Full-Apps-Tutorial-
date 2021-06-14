import React from "react";
import { useState, Fragment } from "react";

// CSS styles
import "../css/formElem.css";

const FormElem = () => {
  // first method (1)
  const [info, setInfo] = useState({
    name: "",
    email: "",
    people: [],
  });

  // second method (2)
  // const [info, setInfo] = useState({
  //   name: "",
  //   email: "",
  // });

  // const [people, setPeople] = useState([]);

  const submitChange = (e) => {
    e.preventDefault();
    // console.dirxml(e.target[0].value, e.target[1].value);
    // console.log(info.name, info.email);
    if (info.name && info.email) {
      //first method (1)
      setInfo(({ people, name, email }) => {
        return {
          ...info,
          people: [
            ...people,
            {
              id: people.length + 1,
              name,
              email,
            },
          ],
        };
      });
      // setInfo({ ...info, name: "", email: "" });
      //#region
      // the most common way to do [ written below ]
      // setInfo({
      //   ...info,
      //   value: true,
      //   people: [
      //     { id: info.people.length + 1, name: info.name, email: info.email },
      //   ],
      // });
      //#endregion

      // second method (2)
      // setPeople((oldPeople) => {
      //   return [...oldPeople, { id: oldPeople.length + 1, ...info }];
      // });
      // setInfo({name: '', email: ''})
    } else {
      alert("Empty Details");
    }
  };
  const PeopleShow = () => {
    return (
      <div>
        {info.people.map(({ id, name, email }) => {
          return (
            <section key={id}>
              <p>{name}</p>
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
        <form onSubmit={submitChange}>
          <label htmlFor="firstName">Name : </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.currentTarget.value })}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </article>
      <PeopleShow />
    </Fragment>
  );
};

export default FormElem;
