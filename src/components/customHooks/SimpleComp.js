import React from "react";
import { useFetch } from "./useFetch";

// css file
import "../../css/customHook.css";
const urlToFetch = "http://localhost:3002/userInfo";

const SimpleComp = () => {
  const { items } = useFetch(urlToFetch);
  console.log(items);
  return (
    <section>
      <ul>
        {items.map(({ id, name }) => {
          return (
            <li key={id}>
              <h2>{name}</h2>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SimpleComp;
