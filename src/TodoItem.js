import React from "react";
import "./Styles.css";

const TodoItem = ({ todo, onSelect, onRemove, isSelected }) => {
  return (
    <div className={`todo-item ${isSelected ? "selected" : ""}`}>
      <span onClick={() => onSelect(todo)}>{todo}</span>
      <button className="button remove" onClick={() => onRemove(todo)}>
        Remove
      </button>
    </div>
  );
};

export default React.memo(TodoItem);
