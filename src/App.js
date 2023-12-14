import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const [todos, setTodos] = useState([]);
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "New Todo"]);
  }, [todos])
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default App;
