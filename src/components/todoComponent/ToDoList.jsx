import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

export class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }

    const newItem = { text: this.state.text, id: Date.now() };

    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  }

  render() {
    return (
      <>
        <h3>TO DO APP</h3>
        <ToDoItem items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-todo'>Enter ToDo Item</label> <br />
          <input
            type='text'
            id='new-todo'
            onChange={this.handleChange}
            value={this.state.text}
          />
          <br />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </>
    );
  }
}

export default ToDoList;
