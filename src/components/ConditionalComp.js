import React from "react";
import { useState, useEffect } from "react";
// CSS Style Files
import "../css/conditionalComp.css";

const ConditionalComp = () => {
  //   const [isError, setIsError] = useState(false);
  const [value, setValue] = useState(window.innerWidth);
  const [cond, setCond] = useState(true);

  const changeSize = function () {
    setValue(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", changeSize);
  }, []);

  const PxShow = () => {
    return (
      <section>
        <h1>Window Size</h1>
        <p>Size : {value}</p>
      </section>
    );
  };
  return (
    <>
      {/* {//#region simple understanding of conditional react states/components/everything } */}
      {/* <section> */}
      {/* {isError && <p>Error . . .</p>} */}

      {/* { Short-circuit evaluation} */}
      {/* {isError || (
          <article>
            <p>Hello World</p>
            <h1>I'm down here</h1>
          </article>
        )} */}

      {/* {Ternary expression}         */}
      {/* {isError ? (
          <article>
            <p>{isError}</p>
            <h1>Error....</h1>
          </article>
        ) : (
          <article>
            <p>error not found</p>
            <h1>Bye</h1>
          </article>
        )}
        <button className="btn" onClick={() => setIsError(!isError)}>
          Toggle State
        </button> */}
      {/* </section> */}
      {/* {//#endregion} */}

      <section>
        {cond || <PxShow />}
        <button className="btn" onClick={() => setCond(!cond)}>
          Show/Hide
        </button>
      </section>
    </>
  );
};

export default ConditionalComp;
