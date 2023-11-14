import React from "react";
const ToDoList = (props) => {
  const handleClick = (index) => {
    props.toggleTodoDone(index); // Call the callback function to update the parent state
  };
  const deleteSingle = (index) => {
    props.toggleTodoRemoved(index);
  };
  return (
    <div className="fixed">
      <h2 className="centered fw-bold mt-2">To-Do</h2>
      <div className="">
        <ul className="">
          {props.todos.map((todo, index) => (
            <li key={index} className="spaced input-group-text mb-0">
              <p
                id="todos"
                onClick={() => handleClick(index)}
                className={`${todo.done ? "completed" : ""}`}
              >
                {todo.text}
              </p>

              <button onClick={() => deleteSingle(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />{" "}
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="centered">
        <button
          className="spaced btn btn-danger"
          onClick={props.deleteCompleted}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
