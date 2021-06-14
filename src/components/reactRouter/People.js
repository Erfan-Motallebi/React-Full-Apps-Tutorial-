import React, { useState } from "react";

// Router link
import { Link } from "react-router-dom";
// file
import { data } from "./data";
const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1 className="people">People Page</h1>
      {people.map(({ id, name }) => {
        return (
          <div key={id}>
            <h4 className="link">
              {name}
              <div>
                <Link to={`/person/${id}`}>Show</Link>
              </div>
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default People;
