import React, { useReducer, useState } from "react";
import uuid from "uuid/v4";

// initialState;
const initialState = {
  toDos: []
};

// actions
const ADD = "add";
const DELETE = "delete";

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload, id: uuid() }] };
    case DELETE:
      return { toDos: state.toDos.filter(todo => todo.id !== action.payload) };
    default:
      return;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };
  return (
    <div>
      <h1>Simple To Do List</h1>
      <form onSubmit={onSubmit}>
        <input
          value={newToDo}
          type="text"
          placeholder="Write To Do"
          onChange={onChange}
        />
      </form>

      <ul>
        <h3>Your List</h3>
        {state.toDos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <span>
              <button
                onClick={() => dispatch({ type: DELETE, payload: todo.id })}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
