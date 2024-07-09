import React, { Fragment, useState } from "react";
import "./todo.css";
import { addTodo, completeAllTodo } from "../../actions/todo/actions";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { Link } from "react-router-dom";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [numberValue, setNumberValue] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleNumberChange = (e) => {
    setNumberValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(completeAllTodo(Number(numberValue)));
    setIsChecked(!isChecked);
  };

  return (
    <Fragment>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items.. "
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <button
              className="add-btn"
              onClick={() => {
                dispatch(addTodo(inputData));
                setInputData("");
              }}
            >
              +
            </button>
          </div>
          <div className="showItems">
            {list
              .filter((element) => element.status === "incomplete")
              .map((element) => (
                <TodoList key={element.id} element={element} />
              ))}
          </div>
          <div className="showItems">
            <button className="complete-all-btn" onClick={handleClick}>
              Complete All
            </button>
            {isChecked ? (
              <div>
                <input
                  type="number"
                  className="cost-input"
                  value={numberValue}
                  onChange={handleNumberChange}
                  placeholder="Enter the cost ..."
                />
                <button className="submit-cost" onClick={ handleSubmit}>Submit</button>
              </div>
            ) : null}
          </div>
          <footer>
            <blockquote>
              <Link to='/cost'>Go to cost page</Link>
            </blockquote>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
