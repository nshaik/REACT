import React, { Component } from 'react';
import './App.css';
import Todos from './Todos.js';

class App extends Component {
  constructor() {
    super();
    this.onTodoClick = this.onTodoClick.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.onTextChanges = this.onTextChanges.bind(this);
    this.state = {
      todos: [
        { todo: "Bring Honey while returning to home", completed: false },
        { todo: "Learn React by this week along with Redux", completed: false },
        { todo: "Finish learning Angular2 this week", completed: false }
      ],
      text:""
    }
  }
  onTodoClick(i){
    let todos = this.state.todos;
    todos[i].completed = !todos[i].completed;
    this.setState({
      todos
    })
  }
  onAddTodo(e) {
    e.preventDefault();
    let todos = this.state.todos;
    todos= [
      {
        todo: this.state.text,
        completed: false
      },
      ...todos
    ];
    this.setState({
      todos,
      text:""
    })
  }
  onTextChanges(e){
    this.setState({
      text:e.target.value
    })
  }
  render() {
    return (
      <section>
        <Todos todos={this.state.todos} onTodoClick={this.onTodoClick} 
        onAddTodo={this.onAddTodo} onTextChanges={this.onTextChanges} />
      </section>
    );
  }
}

export default App;
