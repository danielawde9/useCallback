import React, { useState } from "react";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };
  // add use state array for the todo list 

  // add function for adding todo on the todo list array

  // first without useCallback and 1 with useCallback and make sure to add console log in each

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
