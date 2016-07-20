import AppDispatcher from 'dispatcher/AppDispatcher';
import * as actions from 'constants/actions';

class TodoActions {
  addTodo( todo ) {
    AppDispatcher.dispatch({
      actionType: actions.ADD_TODO,
      todo
    });
  }

  toggleTodo( todoId ) {
    AppDispatcher.dispatch({
      actionType: actions.TOGGLE_TODO,
      todoId
    });
  }
}

export default new TodoActions();

