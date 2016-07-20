import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Contents.less';
import AddForm from './AddForm';
import TodoList from './TodoList';

@CSSModules( style )
export default class Contents extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { todos: [] };
  }

  addTodo( text ) {
    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos,
        { text, completed: false, id: new Date().getTime() }
      ]
    });
  }

  toggle( id ) {
    const todos = this.state.todos.map( todo => {
      return todo.id == id ? { ...todo, completed: !todo.completed } : todo;
    });
    this.setState({ ...this.state, todos });
  }

  render() {
    return (
      <div styleName="contents">
        <AddForm
          addTodo={ ::this.addTodo }
        />
        <TodoList
          todos={ this.state.todos }
          toggle={ ::this.toggle }
        />
      </div>
    );
  }
}

