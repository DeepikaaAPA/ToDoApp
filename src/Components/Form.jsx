import { useState } from "react";

export function Form({ setTasksList }) {
  const [name, setName] = useState("Sample");
  const [desc, setDesc] = useState("Desc");
  const [status, setStatus] = useState("Pending");
  const [newTask, setNewTask] = useState({ name, desc, status });
  console.log("inside form", name, desc, status);

  return (
    <div id="task-form">
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="task-name"
        placeholder="Task name"
        value={name}
      ></input>
      <input
        type="text"
        onChange={(event) => {
          setDesc(event.target.value);
        }}
        id="task-desc"
        placeholder="About the task"
        value={desc}
      ></input>

      <button
        className="btn"
        onClick={() => {
          setTasksList((prev) => [...prev, { name, desc, status }]);
          // setTasksList([...tasksList, { name, desc, status }]);
        }}
      >
        Add
      </button>
    </div>
  );
}
