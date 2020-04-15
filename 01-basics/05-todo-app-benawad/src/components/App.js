import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

// Parent component
class App extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete : true
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos] // add new todo at beg and other to end
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          //suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  updateTodoToShow = status => {
    this.setState({ todoToShow: status });
  };

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  removeCompletedTodo = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    });
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      //active = incomplete
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        Todo Form
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.key}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}

        <div>
          Todos Completed :{" "}
          {this.state.todos.filter(todo => todo.complete).length}
        </div>

        <button onClick={() => this.updateTodoToShow("all")}>All</button>
        <button onClick={() => this.updateTodoToShow("active")}>Active</button>
        <button onClick={() => this.updateTodoToShow("complete")}>
          Completed
        </button>

        <div>
            { this.state.todos.some( todo => todo.complete) ? 
                <button onClick={this.removeCompletedTodo}>Remove Completed Todos</button>
            : null}
        </div>

      </div>
    );
  }
}

export default App;
