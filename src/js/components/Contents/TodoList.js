import React from 'react';
import CSSModules from 'react-css-modules';
import style from './TodoList.less';
import { Checkbox } from 'react-bootstrap';
import TodosStore from '../../stores/todos';
import TodoActions from '../../actions';

@CSSModules( style )
export default class TodoList extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { todos: this.getTodos() };
  }

  componentWillMount() {
    TodosStore.addTodoAddedListener( ::this.loadTodos );
    TodosStore.addTodoToggledListener( ::this.loadTodos );
  }

  componentWillUnmount() {
    TodosStore.removeTodoAddedListener( ::this.loadTodos );
    TodosStore.removeTodoToggledListener( ::this.loadTodos );
  }

  getTodos() {
    return TodosStore.get();
  }

  loadTodos() {
    this.setState({ todos: this.getTodos() });
  }

  toggle( id, e ) {
    TodoActions.toggleTodo( id );
  }

  render() {
    const todos = this.state.todos.map( todo => {
      return (
        <div key={ `todo${ todo.id }` } styleName="todo">
          <Checkbox
            styleName="check"
            checked={ todo.completed }
            onClick={ this.toggle.bind(this, todo.id) }
          >
          { todo.text }
          </Checkbox>
        </div>
      );
    });
    return (
      <div styleName="list">
        { todos }
      </div>
    );
  }
}

