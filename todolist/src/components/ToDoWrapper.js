import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log("Added todo:", todo);
  }

  return (
    <div className="toDoWrapper">
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <ToDo task={todo} key={todo.id} /> // Use `todo.id` for the key
      ))}
    </div>
  );
};
