import { useState } from "react";
import { TaskHeader } from "./TaskHeader";
import { TaskList } from "./TaskList";

export function Tasks({ tasksList, setTasksList }) {
  const [filter,setFilter]=useState("All")
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
            <select id="status-filter" onChange={(e)=>setFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </h5>
        </div>
      </div>
      <TaskList filter={filter} tasksList={tasksList} setTasksList={setTasksList}></TaskList>
    </>
  );
}
