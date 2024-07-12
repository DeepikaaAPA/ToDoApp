import { useState } from "react";
import { TaskCard } from "./TaskCard";

export function Tasks({ tasksList, setTasksList }) {
  const [filter, setFilter] = useState("All");
  return (
    <>
      <div id="tasks-header">
        <div>
          <h3>My ToDos</h3>
        </div>
        <div id="filter">
          <h5>
            {" "}
            <label>Status </label>
            <select
              id="status-filter"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </h5>
        </div>
      </div>
      <div className="container">
        {!tasksList.length && <h3>No tasks yet!!!</h3>}
        {tasksList
          ?.filter((task) => filter == "All" || task.status == filter)
          .map((task, index) => (
            <TaskCard
              key={index}
              index={index}
              task={task}
              tasksList={tasksList}
              setTasksList={setTasksList}
            />
          ))}
      </div>
    </>
  );
}
