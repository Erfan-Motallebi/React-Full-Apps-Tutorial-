/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect, Fragment } from "react";

// css style files
import "../css/todo.css";

// / todo files
import { todoList } from "../scripts/todoList";

const Todo = () => {
  const [todo, setTodo] = useState(todoList);

  // using useState separately
  // const [removeFalse, setRemoveState] = useState(false);
  // const [addFalse, setAddState] = useState(false);

  // using useState all together [ Object MEthod ]
  const [value, setValue] = useState({
    removeFalse: false,
    addFalse: false,
  });

  const RemoveAlert = () => {
    return <h1 className="removedElem">Removed</h1>;
  };
  const AddAlert = () => {
    return <h1 className="removedElem">Added</h1>;
  };

  // calling over 1 functions when the button is clicked
  // const removedElemTrigger = () => {
  //   setValue(true);
  //   setTimeout(() => {
  //     setValue(false);
  //   }, 2000);
  // };

  // Side effect for showing the button removed
  /**
   * @summary use Effect 1
   */
  useEffect(() => {
    // we pick 5 bcs of not letting the side-effect get effective for the first time
    if (value.removeFalse) {
      // setRemoveState(true);
      setValue({ ...value, removeFalse: true });
    }

    return () => {
      setTimeout(() => {
        setValue({ ...value, removeFalse: false });
      }, 3000);
    };
  }, [value.removeFalse]);

  /**
   * @summary use Effect 2
   */

  useEffect(() => {
    if (value.addFalse) {
      // setAddState(true);
      setValue({ ...value, addFalse: true });
    }
    return () => {
      setTimeout(() => {
        setValue({ ...value, addFalse: false });
      }, 3000);
    };
  }, [value.addFalse]);

  const removeItem = function (todoId) {
    setTodo((oldTodoList) => {
      return oldTodoList.filter(({ id }) => id !== todoId);
    });
  };

  // Task Addition Zone
  const addTask = () => {
    setTodo((oldTodo) => {
      return [
        ...oldTodo,
        {
          id: oldTodo.length + 1,
          title: document.querySelector("input[name|='title']").value,
          description: document.querySelector("input[name$='task']").value,
        },
      ];
    });
  };

  return (
    <Fragment>
      <div className="input-container">
        <input type="text" placeholder="your title" name="title" />
        <input type="text" placeholder="add your own task" name="task" />
        <button
          type="button"
          className="btn-input"
          onClick={() => {
            addTask();
            // 1. setAddState(true);
            setValue({ ...value, addFalse: true });
          }}
        >
          Add
        </button>
      </div>
      <article>
        {todo.map(({ id, title, description }) => {
          return (
            <section key={id}>
              <h1>
                {title}
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    removeItem(id);
                    // 1. removedElemTrigger();
                    // 2. setRemoveState(true);
                    setValue({ ...value, removeFalse: true });
                  }}
                >
                  remove
                </button>
              </h1>
              <p>{description}</p>
            </section>
          );
        })}
        <div className="btn-container">
          <button className="btn-todo">
            <h1>
              The Number of Todo Lists : <span>{todo.length}</span>
            </h1>
          </button>
          <button
            className="btn-remove"
            type="button"
            onClick={() => {
              setTodo([]);
              setValue({ ...value, removeFalse: true });
            }}
          >
            <h1>clean</h1>
          </button>
        </div>
      </article>

      {/* it is triggered in a sepcial circumstance */}
      {value.removeFalse && <RemoveAlert />}
      {value.addFalse && <AddAlert />}
    </Fragment>
  );
};

export default Todo;
