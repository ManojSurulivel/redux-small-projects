import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../redux/slices/CounterSlice";


function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterInfo.value);



  return (
    <div className="counter">
      <h1>1. Counter with Redux</h1>
      <h2 style={{ color: "red", margin: "12px" }}>{count}</h2>

      <button style={{ margin: "10px" }} onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <hr />

    </div>
  );
}
export default Counter;
