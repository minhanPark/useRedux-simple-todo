import uuid from "uuid/v4";

// initialState;
export const initialState = {
  toDos: [],
  completed: []
};

// actions
export const ADD = "add";
export const DELETE = "delete";
export const COMPLETE = "complete";
export const UNCOMPLETE = "uncomplete";

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }]
      };
    case DELETE:
      return {
        ...state,
        toDos: state.toDos.filter(todo => todo.id !== action.payload)
      };
    case COMPLETE:
      const completedTodo = state.toDos.find(
        todo => todo.id === action.payload
      );
      return {
        ...state,
        toDos: state.toDos.filter(todo => todo.id !== action.payload),
        completed: [...state.completed, completedTodo]
      };
    case UNCOMPLETE:
      const uncompletedTodo = state.completed.find(
        todo => todo.id === action.payload
      );
      return {
        ...state,
        toDos: [...state.toDos, uncompletedTodo],
        completed: state.completed.filter(todo => todo.id !== action.payload)
      };
    default:
      return;
  }
};

export default reducer;
