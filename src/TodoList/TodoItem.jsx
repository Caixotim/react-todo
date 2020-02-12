import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  handleDeleteItem = () => {
    this.props.onDelete(this.props.item.id);
  };

  handleItemDone = () => {
    this.props.onDone(this.props.item.id);
  };

  render = () => {
    const { item } = this.props;

    return (
      <li className={`item ${item.done ? "done" : ""}`}>
        <div className="content" onClick={this.handleItemDone}>
          {item.content}
        </div>
        <button className="delete-btn" onClick={this.handleDeleteItem}>
          DELETE
        </button>
      </li>
    );
  };
}

export default TodoItem;
