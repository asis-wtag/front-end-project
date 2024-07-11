import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../actions/todo/actions";
import toast from "react-hot-toast";
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

  const handleCostSubmit = (todoId) => {
    if(numberValue.trim()==""){
      toast.error("Todo cost can't be empty !")
      return;
    }
    dispatch(completeTodo(todoId, Number(numberValue)));
    setIsChecked(!isChecked);
  };

  const handleDeleteTodo = (id) => {
    if(window.confirm('Are sure you want to delete this todo?')){
    dispatch(deleteTodo(id))
    }
  }

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
        <button onClick={() => handleCostSubmit(element.id)}>Submit</button>
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
        onClick={() =>handleDeleteTodo(element.id) }
      >
        -
      </button>
    </div>
  );
};

export default TodoList;
