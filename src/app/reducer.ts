import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './actions';
import { IAppState } from './store';

export function reducer(state: IAppState, action): IAppState {

    switch (action.type) {

        case ADD_TODO:
            action.todo.id = state.todos.length + 1;
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            });

        case TOGGLE_TODO:
            const todo = state.todos.find(t => t.id === action.id);
            const index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
                    ...state.todos.slice(index + 1)
                ],
                lastUpdate: new Date()
            });

        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            });
        case REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            });

    }

    return state;
}
