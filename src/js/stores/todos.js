import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import * as actions from '../constants/actions';
import * as events from '../constants/events';

class TodosStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [];
  }

  get() {
    return this.todos;
  }

  add( text ) {
    this.todos = [
      ...this.todos,
      { text, completed: false, id: new Date().getTime() }
    ];
    this.emit( events.TODO_ADDED );
  }

  toggle( id ) {
    this.todos = this.todos.map( todo => {
      return todo.id == id ?
        { ...todo, completed: !todo.completed } :
        todo;
    });
    this.emit( events.TODO_TOGGLED );
  }

  addTodoAddedListener( cb ) {
    this.on( events.TODO_ADDED, cb );
  }

  removeTodoAddedListener( cb ) {
    this.removeListener( events.TODO_ADDED, cb );
  }

  addTodoToggledListener( cb ) {
    this.on( events.TODO_TOGGLED, cb );
  }

  removeTodoToggledListener( cb ) {
    this.removeListener( events.TODO_TOGGLED, cb );
  }
}

const todosStore = new TodosStore();

AppDispatcher.register( action => {
  switch( action.actionType ) {
    case actions.ADD_TODO:
      todosStore.add( action.todo );
      break;
    case actions.TOGGLE_TODO:
      todosStore.toggle( action.todoId );
      break;
  }
});

export default todosStore;

