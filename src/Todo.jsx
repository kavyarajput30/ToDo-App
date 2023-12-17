import "./Todo.css";
import { useState } from "react";
const Todo = (event) => {
  const [task, setTask] = useState([]);
  const [newTask, setnewTask] = useState("");

  function addTask() {
    setTask([...task, newTask]);
    setnewTask("");
  }

  function inputValueHandler(event) {
    setnewTask(event.target.value);
  }

  function deleteHandler(index) {
    setTask(task.filter((_, idx) => idx !== index));
  }

  return (
    <>
      <div className="main-div">
        <div className="heading-div">
          <h1>Todo App</h1>
        </div>

        <div className="first-div">
          <input
            type="text"
            placeholder="Enter the task...."
            value={newTask}
            onChange={inputValueHandler}
          />
          <button className="btn" onClick={addTask}>
            Add
          </button>
        </div>

        <div className="second-div">
          <ul type="none">
            {task.map((ele, index) => {
              return (
                <li key={index}>
                  <span className="task">{ele}</span>
                  <button className="btn" onClick={() => deleteHandler(index)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Todo;
