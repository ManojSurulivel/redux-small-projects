import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItems, removeItems } from "../../../redux/slices/TodoSlice";

function Todo() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todoInfo.todo);

  const addItem = () => {
    if (input.trim() !== "") {
      dispatch(addItems(input)); // Dispatch the addItems action with the input as payload
      setInput("");
      inputRef.current.focus();
    }
    // if (input.trim() !== "") => trim() will return an empty string "", and the if condition input.trim() !== "" will prevent this from being added to the list.
    //In short, trim() helps to avoid adding empty or space-filled todo items, ensuring that the input has valid content.
  };  
  

  const removeItem = (item) => {
    dispatch(removeItems(item));
  };
  
  console.log(input)

  return (
    <div className="todo">
      <h1>3. TodoList with Redux</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div >
          <input
            type="text"
            value={input}
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a todo"
          />

          <button style={{ margin: "10px" }} onClick={addItem}>
            Add
          </button>

          <ul style={{ color: "blue" }}>
            {todo.map((item, index) => (
              
              <li style={{ margin: "10px" }} key={index}>
                {item}
                <button
                  style={{ marginLeft: "30px" }}
                  onClick={() => removeItem(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

  
        </div>
      </form>
      <hr />
    </div>
  );
}

export default Todo;
