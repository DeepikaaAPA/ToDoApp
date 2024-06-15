import { useState } from "react";

const task_template = {
  id: -1,
  name: "Task Name",
  desc: "task desc",
  status: "Pending",
};

export function Form() {
  let [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("Pending");
  console.log("inside form", name, desc, status);
  return (
    <div>
      <form id="task-form">
        <input
          type="text"
          id="task-name"
        
          placeholder="Task name"
        ></input>
        <input
          type="text"
          id="task-desc"
          placeholder="About the task"
        ></input>
        <button
          id="btn-add-task"
          onClick={() => {
            const newTask = {
              name,
              desc,
              status,
            };
            setTasks([...tasks,newTask]);
          }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
