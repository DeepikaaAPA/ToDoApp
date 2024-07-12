import { useState } from "react";

export function Form({ setTasksList }) {
  const [name, setName] = useState("Task Name");
  const [desc, setDesc] = useState("Task description");
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
        className="btn add-btn"
        onClick={() => {
          setTasksList((prev) => [...prev, { name, desc, status: "Pending" }]);
        }}
      >
        Add Task
      </button>
    </div>
  );
}
