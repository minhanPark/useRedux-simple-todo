# useReducer-example

리듀서를 사용해서 간단한 투두 리스트를 만들어보겠습니다.

## useReducer 사용하기

```js
// reducer.js

export const initialState = {
  toDos: [],
  completed: []
};
```

우선은 state의 초기값이 있어야 합니다.

```js
// actions
export const ADD = "add";
export const DELETE = "delete";
export const COMPLETE = "complete";
export const UNCOMPLETE = "uncomplete";
```

그리고 액션의 타입을 정의해주세요.

```js
const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {};
    case DELETE:
      return {};
    case COMPLETE:
      return {};
    case UNCOMPLETE:
      return {};
    default:
      return;
  }
};
```

reducer 함수에 액션의 타입에 따라 실행될 switch문을 만들면 됩니다. 이때 **state의 값을 수정하는 것이 아니라 교체해야 하는 것**이라고 알아두시면 됩니다.

```js
// App.js

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: DELETE, payload: todo.id })}>
        DELETE
      </button>
    </div>
  );
}
```

useReducer에 정의한 reducer함수와 초기 state를 넣어주면 state와 state를 변경할 수 있는 dispatch를 리턴합니다.  
사용방법은 밑에 버튼 처럼 dispatch를 이용해서 state를 변경하면 됩니다.

![투두리스트](https://drive.google.com/uc?id=1CEFdB0WdsFuHYy6hVnpLpaBzI57GH_de)  
해당 코드를 실행하면 투두리스트를 확인 할 수 있습니다.
