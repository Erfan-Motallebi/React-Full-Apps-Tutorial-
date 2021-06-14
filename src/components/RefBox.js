import React from "react";
import { useState, useRef } from "react";

// css file
import "../css/refBox.css";

const RefBox = () => {
  //State of the variables
  const [name, setName] = useState("Erfan");

  // Ref Containers
  const hOneContainer = useRef(null);
  const sectionContainer = useRef(null);
  const inputContainer = useRef(null);

  const handleSubmit = function (e) {
    e.preventDefault();
    setName(inputContainer.current.value);
    const h2 = document.createElement("h2");
    h2.style.cssText = `
            color: red;
            background-color: #fb9300;
            width: 250px;
            border-radius: 5px;
            border: unset;
            font-size: 1.2rem;
            font-family: verdana;
            text-align: center;
            margin: 0 auto;
    `;
    h2.textContent = name;
    sectionContainer.current.insertAdjacentElement("beforeend", h2);
  };

  return (
    <article>
      <section ref={sectionContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              ref={inputContainer}
            />
            <button type="submit">Change</button>
          </div>
        </form>
        <h1 ref={hOneContainer}>{name}</h1>
      </section>
    </article>
  );
};
export default RefBox;
