import './styles.css';
import React, { Component } from 'react';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      text: ""
    }
  }


  checkOrUncheck(){
    if (this.state.checked) {
      this.props.uncheck()
      this.setState({checked: false})
    } else {
      this.props.check()
      this.setState({checked: true})
    }
  }

  editTodo() {
    console.log("editTodo")
  }

  render() {
    return (
      <li className="todo-container" id={this.props.id}>
        <input type="checkbox" className="todo-checkbox" onClick={() => this.checkOrUncheck()}></input>
        <input type="text" className="todo-text" onChange={() => this.editTodo()}></input>
        <input type="button" className="todo-delete" value="Delete" data-id={this.props.id} onClick={() => {this.props.deleteTodo(this.props.id)}}></input>
      </li>
     );
  }
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      id: 0,
      checkedCount: 0
    }

    this.check = this.check.bind(this)
    this.uncheck = this.uncheck.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  newTodo() {
    console.log(`New Todo, id = ${this.state.id}`)
    this.setState({id: this.state.id + 1, todos: [...this.state.todos, this.state.id]}, () => console.log(`Next Todo id = ${this.state.id}`))

  }

  check() {
    this.setState({checkedCount: this.state.checkedCount + 1})
  }

  uncheck() {
    this.setState({checkedCount: this.state.checkedCount - 1})
  }

  deleteTodo(todoId) {
    //remove from todos
    console.log(todoId)
    const newTodos = this.state.todos.filter( todo => todo !== todoId )
    console.log(this.state.todos)

    this.setState({todos: newTodos })
  }

  render(){
    return (
      <div>
        <title>TODO App</title>
        <link rel="stylesheet" type="text/css" href="./styles.css" />
        <div className="container center">
          <h1 className="center title">Todo's</h1>
          <div className="flow-right controls">
            <span>Item count: <span id="item-count">{ this.state.todos.length }</span></span>
            <span>Unchecked count: <span id="unchecked-count">{this.state.todos.length - this.state.checkedCount}</span></span>
          </div>
          <button className="button center" onClick={() => this.newTodo()}>New TODO</button>
          <ul id="todo-list" className="todo-list">
            { this.state.todos.map( (todo) => (<Todo key={todo} id={todo} check={this.check} uncheck={this.uncheck} deleteTodo={this.deleteTodo}/>  ) ) }
          </ul>
        </div>
      </div>
    );
  }
}