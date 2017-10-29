import React, { Component } from 'react';
import { connect } from 'react-redux';

import { List } from 'immutable';

import Form from './shared/Form';
import TodoList from './shared/TodoList';

import * as actions from './actions';

class App extends Component {
  state = {
    text: '',
  };

  async componentDidMount() {
    if (this.props.todos.size === 0) {
      await this.props.getTodos();
    }
  }

  handleChange = e => {
    const text = e.target.value;

    this.setState({ text });
  };

  handleSubmit = async e => {
    e.preventDefault();

    await this.props.postTodo(this.state.text);

    this.setState({ text: '' });
  };

  render() {
    return (
      <div className="App">
        <h1>Immutablejs test</h1>
        <Form
          value={this.state.text}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList items={this.props.todos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // normally I get an Array (List) of ids from the store
  const ids = List(Object.keys(state.get('todos').toObject()));

  return {
    // todos: state.get('todos').toArray(),
    todos: ids.map(id => state.get('todos').get(id)),
  };
}

export default connect(mapStateToProps, {
  getTodos: actions.getTodos,
  postTodo: actions.postTodo,
})(App);
