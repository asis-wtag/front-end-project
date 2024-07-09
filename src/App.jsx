import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./components/todo/Todo";
import "./app.css";
import TodoCost from "./components/todo/TodoCost";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/cost" element={<TodoCost/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
