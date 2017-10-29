import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './shared/Form';
import TodoList from './shared/TodoList';

import * as actions from './actions';

class App extends Component {
  async componentDidMount() {
    if (this.props.todos.length === 0) {
      await this.props.getTodos();
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Immutablejs test</h1>
        <Form />
        <TodoList items={this.props.todos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps, {
  getTodos: actions.getTodos,
})(App);
