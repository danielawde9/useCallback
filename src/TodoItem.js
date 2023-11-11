import React from "react";

const TodoItem = ({ todo, onSelect, isSelected }) => {
  return (
    <div
      style={{
        padding: "10px",
        margin: "5px",
        backgroundColor: isSelected ? "lightblue" : "lightgrey",
        cursor: "pointer",
      }}
      onClick={() => onSelect(todo)}
    >
      {todo}
    </div>
  );
};

export default React.memo(TodoItem);
