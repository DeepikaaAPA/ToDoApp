import { useState } from "react";

export function Form({ tasksList, setTasksList }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("Pending");
  const [newTask, setNewTask] = useState({ name, desc, status });
  console.log("inside form", name, desc, status);
  return (
    <div>
      <form id="task-form">
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="task-name"
          placeholder="Task name"
        ></input>
        <input
          type="text"
          onChange={(event) => {
            setDesc(event.target.value);
          }}
          id="task-desc"
          placeholder="About the task"
        ></input>
        <button
          id="btn-add-task"
          onClick={() => {
            setTasksList([...tasksList, { name, desc, status }]);
          }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
