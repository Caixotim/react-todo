import React from "react";
import "./App.css";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";

class App extends React.Component {
  state = {
    lastTodoId: 0,
    todoList: []
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
      ...this.state,
      todoList: list
    });
  };

  handleAddItem = content => {
    const newTodoId = this.state.lastTodoId + 1;
    const todoItem = {
      id: this.state.lastTodoId + 1,
      content,
      done: false
    };

    this.setState({
      lastTodoId: newTodoId,
      todoList: [...this.state.todoList, todoItem]
    });
  };

  render() {
    return (
      <div className="todo-app">
        <div>
          <AddTodo onAddTodo={this.handleAddItem}></AddTodo>
        </div>
        <div className="list-grid">
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
