import React from 'react';
import './todoCost.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TodoCost = () => {
  const list = useSelector((state) => state.todoReducers.list);
  const completedList = list.filter((element) => element.status === 'complete');

  return (
    <div className='main-div'>
    <div className="todo-cost-container">
      <table className="todo-cost-table">
        <thead>
          <tr>
            <th>Task Id</th>
            <th>Task Name</th>
            <th>Task Cost</th>
          </tr>
        </thead>
        <tbody>
          {completedList.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.data}</td>
              <td>{element.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='footer-div'>
      <footer>
            <blockquote>
              <Link to='/'>Go to task page</Link>
            </blockquote>
          </footer>
      </div>
    </div>
    </div>
  );
}

export default TodoCost;
