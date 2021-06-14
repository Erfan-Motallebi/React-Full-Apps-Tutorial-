import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1 className="error">Error Page</h1>
      <Link to="/">
        <button className="btn" type="button">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
