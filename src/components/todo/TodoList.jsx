import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../actions/todo/actions";
import "./todoList.css";

const TodoList = ({ element }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [numberValue, setNumberValue] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleNumberChange = (e) => {
    setNumberValue(e.target.value);
  };

  const handleSubmit = (todoId) => {
    dispatch(completeTodo(todoId, Number(numberValue)));
    setIsChecked(!isChecked);
  };

  let content;

  if (isChecked) {
    content = (
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>
        <input
          type="number"
          value={numberValue}
          onChange={handleNumberChange}
          placeholder="Enter the cost ..."
        />
        <button onClick={() => handleSubmit(element.id)}>Submit</button>
      </div>
    );
  } else {
    content = (
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
    );
  }

  return (
    <div className="eachItem" key={element.id}>
      <h3>{element.data}</h3>
      {content}
      <button
        className="delete-btn"
        title="Delete Item"
        onClick={() => dispatch(deleteTodo(element.id))}
      >
        -
      </button>
    </div>
  );
};

export default TodoList;
