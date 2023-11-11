import { useCallback } from "react";
import { useState } from "react";
import './Styles.css'
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodos = () => {
    const newTodo = `Item ${todos.length + 1}`;
    setTodos([...todos, newTodo]);
  };

  const selectTodo = useCallback((todo) => {
    setSelectedTodo(todo);
  }, []);

  return (
    <>
      <button onClick={addTodos}>Add Todo</button>
      <div>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onSelect={selectTodo}
            isSelected={todo === selectedTodo}
          />
        ))}
      </div>
    </>
  );
}

export default App;
