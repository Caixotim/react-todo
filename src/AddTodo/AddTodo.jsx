import React from "react";
import "./AddTodo.css";

class AddTodo extends React.Component {
  state = {
    content: ""
  };

  handleOnChange = e => {
    const content = e.target.value;

    this.setState({
      content
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddTodo(this.state.content);
    this.setState({
      content: ""
    });
  };

  render = () => (
    <form onSubmit={this.handleSubmit}>
      <input
        className="search"
        placeholder="Type a todo to add to your list..."
        onChange={this.handleOnChange}
        value={this.state.content}
      ></input>
    </form>
  );
}

export default AddTodo;
