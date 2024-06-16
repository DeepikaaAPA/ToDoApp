import { useState } from "react";

export function TaskCard({ index, task, setTasksList, tasksList }) {
  const bgcolor = task.status == "Completed" ? "green" : "orange";
  let [statusBg, setStatusBg] = useState(bgcolor);

  return (
    <div className="task-card">
      <h4>
        {index + 1}
        {" )  "}
        {task.name}
      </h4>
      <p>{task.desc}</p>
      <select
        onChange={(event) => {
          setStatusBg(event.target.value == "Completed" ? "green" : "orange");
        }}
        style={{ backgroundColor: statusBg }}
      >
        {task.status == "Completed" ? (
          <>
            <option value="Completed" selected>
              Completed
            </option>
            <option value="Pending">Pending</option>
          </>
        ) : (
          <>
            <option value="Completed">Completed</option>
            <option value="Pending" selected>
              Pending
            </option>
          </>
        )}
      </select>

      <br></br>
      <br></br>
      <button className="btn" onClick={() => {}}>
        Edit
      </button>
      <button
        className="btn"
        onClick={() => {
          setTasksList(tasksList.filter((t) => t.name != task.name));
        }}
      >
        Delete
      </button>
    </div>
  );
}
