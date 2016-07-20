import React from 'react';
import CSSModules from 'react-css-modules';
import style from './TodoList.less';
import { Checkbox } from 'react-bootstrap';

@CSSModules( style )
export default class TodoList extends React.Component {
  constructor( props ) {
    super( props );
  }

  toggle( id, e ) {
    this.props.toggle( id );
  }

  render() {
    const todos = this.props.todos.map( todo => {
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

