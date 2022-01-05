import React, { useState } from "react";
import Todo from "./Todo";
import TodoFrom from "./TodoFrom";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodo = [todo, ...todos];

    setTodos(newTodo);
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const updateTodo = (todoId, newVal) => {
    if (!newVal.text || /^\s*$/.test(newVal.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newVal : item))
    );
  };

  const completeTodos = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's the plan</h1>
      <TodoFrom onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
