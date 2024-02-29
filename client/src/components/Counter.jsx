import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  decrement,
  increment,
  reset,
} from "../slices/counterSlice";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="wrapper">
        <button onClick={() => dispatch(decrement())}>dec</button>
        <h3>{count}</h3>
        <button onClick={() => dispatch(increment())}>inc</button>
      </div>
      <div>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </div>
  );
}

export default Counter;
