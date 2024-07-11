import React, { Fragment, useState } from "react";
import "./todo.css";
import { addTodo, completeAllTodo } from "../../actions/todo/actions";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [numberValue, setNumberValue] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  const handleCompleteAllClick = () => {
    setIsChecked(!isChecked);
  };

  const handleNumberChange = (e) => {
    setNumberValue(e.target.value);
  };

  const handleAddTodo = () => {
    if(inputData.trim()==""){
      toast.error("Todo name can't be empty !")
      return;
    }
    dispatch(addTodo(inputData.trim()));
    setInputData("");
  }

  const handleCompleteAllCostSubmit = () => {
    if(numberValue.trim()==""){
      toast.error("Todo cost can't be empty !")
      return;
    }
    dispatch(completeAllTodo(Number(numberValue)));
    setIsChecked(!isChecked);
  };

  return (
    <Fragment>
      <div className="main-div">
        <Toaster/>
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
              onClick={handleAddTodo }
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
            <button className="complete-all-btn" onClick={handleCompleteAllClick}>
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
                <button className="submit-cost" onClick={handleCompleteAllCostSubmit}>Submit</button>
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
