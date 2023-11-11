import React, { useState, useCallback } from "react";
import TodoItem from "./TodoItem";
import "./Styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = () => {
    const newTodo = `Item ${todos.length + 1}`;
    setTodos([...todos, newTodo]);
  };

  const selectTodo = useCallback((todo) => {
    setSelectedTodo(todo);
  }, []);

  const removeTodo = useCallback(
    (todoToRemove) => {
      setTodos(todos.filter((todo) => todo !== todoToRemove));
    },
    [todos]
  );

  return (
    <div className="todo-list">
      <button className="button add" onClick={addTodo}>
        Add Todo
      </button>
      <div>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onSelect={selectTodo}
            onRemove={removeTodo}
            isSelected={todo === selectedTodo}
          />
        ))}
      </div>
      {selectedTodo && <p>Selected Todo: {selectedTodo}</p>}
    </div>
  );
}

export default App;
