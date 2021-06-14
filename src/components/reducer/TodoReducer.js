import React from "react";
import { useState, useReducer } from "react";

// important files to be generated
// import { data } from "./data";
import Modal from "./Modal";

// reducer
import { dispatchHandler } from "./dispatchHandler";
// css style file
import "../../css/todoReducer.css";

const initialStates = {
  people: [],
  isShowModal: false,
  modalContent: "",
};

const TodoReducer = () => {
  //   const [showmodal, setShowmodal] = useState(false);
  //   const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(dispatchHandler, initialStates);

  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      //   const newPerson = { id: new Date().getTime().toString(), name: name };
      dispatch({
        type: "NAME",
        payload: { id: new Date().getTime().toString(), name: name },
      });
      setName("");
    } else {
      dispatch({ type: "EMPTY" });
    }
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE", payload: { Id: id } });
  }

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <article>
      <div className="outer-modal">
        {state.isShowModal && (
          <Modal closeModal={closeModal} modalContent={state.modalContent} />
        )}
      </div>
      <section className="form">
        <form onSubmit={handleSubmit} className="form-control">
          <label htmlFor="person">Add Person </label>
          <input
            type="text"
            name="person"
            id="person"
            placeholder="add a new person . . ."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
      </section>
      <article>
        {state.people.map(({ id, name }) => {
          return (
            <div key={id}>
              <h3>
                {name}
                <button
                  type="button"
                  className="remove"
                  onClick={() => removeItem(id)}
                ></button>
              </h3>
            </div>
          );
        })}
      </article>
    </article>
  );
};

export default TodoReducer;
