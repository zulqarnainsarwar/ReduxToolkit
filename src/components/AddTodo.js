import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  // add event handler information send
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(AddTodo(input));
    setInput();
  };

  return (
    <div>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-200 focus:border-indigo-500 focus:ring-2 text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
        >
          {" "}
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
