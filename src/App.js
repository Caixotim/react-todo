import React from "react";
import "./App.css";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";

class App extends React.Component {
  state = {
    todoList: [
      {
        id: 1,
        content: "item 1",
        done: false
      },
      {
        id: 2,
        content: "item 2",
        done: true
      }
    ]
  };

  handleDelete = id => {
    const list = this.state.todoList.filter(item => item.id !== id);

    this.setState({
      todoList: list
    });
  };

  handleDone = id => {
    const list = this.state.todoList.map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }

      return item;
    });

    this.setState({
      todoList: list
    });
  };

  handleAddItem = content => {
    const todoItem = {
      id: Math.random(),
      content,
      done: false
    };

    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, todoItem]
    });
  };

  render() {
    return (
      <div className="main-page">
        <div>
          <AddTodo onAddTodo={this.handleAddItem}></AddTodo>
        </div>
        <div>
          <TodoList
            list={this.state.todoList}
            onDelete={this.handleDelete}
            onDone={this.handleDone}
          ></TodoList>
        </div>
      </div>
    );
  }
}

export default App;
