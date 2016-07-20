import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Contents.less';
import AddForm from './AddForm';
import TodoList from './TodoList';

@CSSModules( style )
export default class Contents extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div styleName="contents">
        <AddForm />
        <TodoList />
      </div>
    );
  }
}

