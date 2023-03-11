import React, { useState } from "react";
import "./Prediction.css";
export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Write Comment"
      />
      <button type="submit" className="todo-button">
        Add Comment
      </button>
    </form>
  );
}
