import React, { useState, useEffect } from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import ToDoList from "./ToDoList";
import "./styles.css";
import { motion } from "framer-motion";

const App = (props) => {
  // Load todos from localStorage or use a default value if not available
  var initialTodos = JSON.parse(localStorage.getItem("todos")) || [
    { text: "Learn React.Js", done: false },
    { text: "Learn Redux", done: false },
    { text: "Master JS", done: false },
  ];
  // if (Object.keys(initialTodos).length === 0) {
  //   initialTodos = [
  //     { text: "Learn React.Js", done: false },
  //     { text: "Learn Redux", done: false },
  //     { text: "Master JS", done: false },
  //   ];
  // }
  const [todos, setTodos] = useState(initialTodos);
  const [inputText, setInputText] = useState("");

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToDo = (event) => {
    event.preventDefault();
    setTodos([...todos, { text: inputText, done: false }]);
    setInputText("");
  };

  const handleInput = (event) => {
    setInputText(event.target.value);
  };

  const deleteCompleted = () => {
    const completedTodos = todos.filter((todo) => todo.done);

    if (completedTodos.length > 0) {
      const updatedTodos = todos.filter((todo) => !todo.done);
      setTodos(updatedTodos);
    }
  };

  const toggleTodoDone = (index) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[index].done = !newTodos[index].done;
      return newTodos;
    });
  };

  const toggleTodoRemoved = (index) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((_, i) => i !== index);
      return newTodos;
    });
  };

  const resetTodos = () => {
    localStorage.removeItem("todos");
    setTodos([]);
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.9,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }}
      id="main_container"
      className="centered"
    >
      <div>
        <DateTimeDisplay />
      </div>
      <form className="centered clean_rounded" onSubmit={addToDo}>
        <div className="mt-1">
          <input
            className="spaced form-control"
            type="text"
            onChange={handleInput}
            value={inputText}
          />
        </div>
        <div className="centered">
          <button className="spaced btn btn-outline-dark" type="submit">
            Add
          </button>
        </div>
      </form>
      <div id="content" className="centered clean_rounded">
        <ToDoList
          todos={todos}
          deleteCompleted={deleteCompleted}
          toggleTodoDone={toggleTodoDone}
          toggleTodoRemoved={toggleTodoRemoved}
        />
        <button className="spaced btn btn-danger" onClick={resetTodos}>
          Empty List
        </button>
      </div>
      <footer class="footer">
        <div>
          <a
            href="https://github.com/fragakos"
            target="_blank"
            rel="noreferrer"
          >
            GitHub/fragakos
          </a>
          <span> Lazaros Fragakos 2023</span>
        </div>
      </footer>
    </motion.div>
  );
};

export default App;
