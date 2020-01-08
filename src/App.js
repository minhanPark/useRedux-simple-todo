import React, { useReducer, useState } from "react";
import reducer, {
  initialState,
  ADD,
  DELETE,
  COMPLETE,
  UNCOMPLETE
} from "./reducer";

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
            <span>
              <button
                onClick={() => dispatch({ type: COMPLETE, payload: todo.id })}
              >
                V
              </button>
            </span>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed list</h2>
            {state.completed.map(todo => (
              <li key={todo.id}>
                {todo.text}
                <span>
                  <button
                    onClick={() => dispatch({ type: DELETE, payload: todo.id })}
                  >
                    Delete
                  </button>
                </span>
                <span>
                  <button
                    onClick={() =>
                      dispatch({ type: UNCOMPLETE, payload: todo.id })
                    }
                  >
                    X
                  </button>
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

export default App;
