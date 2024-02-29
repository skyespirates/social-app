import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";

import Button from "./Button";
import List from "./List";
import Input from "./Input";
import { useState } from "react";

const TodoApp = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleClick = () => {
    if (input) {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  return (
    <div>
      <div>
        <Input
          placeholder="Add Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button primary="true" onClick={handleClick}>
          Click Me
        </Button>
      </div>
      <List items={todos} />
    </div>
  );
};

export default TodoApp;
