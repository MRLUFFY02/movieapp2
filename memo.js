import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./todos";

const TestMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };


  return (
    <>
    <Todos todos={todos}/>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <button onClick={addTodo}>add Tods</button>

      </div>
    </>
  );
};
export default TestMemo