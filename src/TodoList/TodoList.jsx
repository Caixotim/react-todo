import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ list, onDelete, onDone }) => {
  return (
    <div>
      {list.length === 0 ? (
        <div className="empty-list">You have no todo's left, yay!</div>
      ) : (
        <ul className="list">
          {list.map(item => (
            <TodoItem
              key={item.id}
              item={item}
              onDelete={onDelete}
              onDone={onDone}
            ></TodoItem>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
