import React from "react";
import { useState, useEffect } from "react";
// CSS Style Files
import "../css/multipleReturns.css";

const url = "https://api.github.com/users/anotherjesse";

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status === 200 || res.ok === "true") {
          return res.json();
        } else {
          setLoading(false);
          setIsError(true);
        }
      })
      .then(({ login }) => {
        setUser(login);
        setLoading(false);
      })
      .catch((err) => console.error(true));
  }, []);

  if (loading) {
    return (
      <section>
        <h2>Loading Part</h2>
      </section>
    );
  } else if (user) {
    return (
      <section>
        <h1>{user}</h1>
      </section>
    );
  } else if (isError) {
    return (
      <section>
        <h2>Error Part</h2>
      </section>
    );
  } else {
    return (
      <section>
        <h2>Default Part</h2>
      </section>
    );
  }
};

export default MultipleReturns;
