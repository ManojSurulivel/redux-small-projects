import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userName } from "../redux/slices/UserSlice";

function User() {
  const user = useSelector((state) => state.userInfo.value);
  const dispatch = useDispatch();

  return (
    <div className="user">
      <h1>2. Toggle Button with Redux</h1>
      <h2 style={{ color: "green", margin: "12px" }}>
        {user ? "Manoj" : "Kumar"}
      </h2>
      <button style={{ margin: "10px" }} onClick={() => dispatch(userName())}>
        Toggle Name
      </button>
      <hr />
    </div>
  );
}
export default User;
