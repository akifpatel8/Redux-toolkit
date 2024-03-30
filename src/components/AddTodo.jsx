import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = (e) => {
      e.preventDefault();
    dispatch(addTodo(input))
    setInput("")
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          placeholder="enter todo"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
