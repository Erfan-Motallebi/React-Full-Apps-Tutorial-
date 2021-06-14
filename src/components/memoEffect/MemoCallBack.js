/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect, memo, useCallback } from "react";

// css style && files
import "../../css/memoEffect.css";
import { data } from "./data";

const SinglePerson = memo(({ name, upVote }) => {
  // checking the entrance of the Single component through memoization
  useEffect(() => {
    console.count("Memo Effect");
  });
  return (
    <div>
      <h1>
        <span>{name}</span>
        <button className="btn" type="button" onClick={upVote}>
          upVote
        </button>
      </h1>
    </div>
  );
});

const MemoCallBack = () => {
  const [conds, setCond] = useState({
    count: 0,
    people: data,
    upVote: 0,
  });
  // useCallback needs an dependency so as to update the state automatically
  const upVote = useCallback(() => {
    // in case of testing
    // console.log(conds.upVote);
    setCond({ ...conds, upVote: conds.upVote + 1 });
  }, [conds.upVote]);

  return (
    <div className="container">
      <button
        type="button"
        onClick={() => setCond({ ...conds, count: conds.count + 1 })}
      >
        Counter
      </button>
      <h4>{conds.count}</h4>
      <h4>{conds.upVote}</h4>
      {conds.people.map((person) => {
        return <SinglePerson key={person.id} {...person} upVote={upVote} />;
      })}
    </div>
  );
};

export default MemoCallBack;
