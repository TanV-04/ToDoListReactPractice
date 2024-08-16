import React, { useState } from "react";
import "../App.css";
import ToDo from "./ToDo";

export default function ToDoForm({ addTodo }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (typeof addTodo === "function") {
      addTodo(value); // Call addTodo function passed from the parent
      setValue(""); // Clear input after adding
    } else {
      console.error("addTodo is not a function");
    }
  }

  return (
    <div className="flex flex-col items-center w-full px-10 mt-5">
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-2 mb-4"
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter task name"
          className="flex-grow p-2 rounded-md text-sm text-black"
        />
        <button
          type="submit"
          className="bg-purple-900 p-3 rounded-md text-sm text-white"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
