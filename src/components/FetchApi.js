import React from "react";
import { useState, useEffect } from "react";

// CSS Style Files
import "../css/fetchApi.css";
const FetchApi = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const users = await fetch("https://api.github.com/users");
    const userResponse = await users.json();
    setUsers(userResponse);
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <h1>Github Users API</h1>
      <article>
        {users.map(({ id, login, avatar_url, html_url }) => {
          return (
            <section key={id}>
              <img src={avatar_url} alt={login} />

              <div className="details">
                <h2>{login}</h2>
                <h4>
                  {" "}
                  <a href={html_url} className="profile">
                    profile
                  </a>{" "}
                </h4>
              </div>
            </section>
          );
        })}
      </article>
    </React.Fragment>
  );
};

export default FetchApi;
