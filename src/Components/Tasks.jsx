import { TaskHeader } from "./TaskHeader";
import { TaskList } from "./TaskList";

export function Tasks({ tasksList, setTasksList }) {
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
            <select id="status-filter">
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </h5>
        </div>
      </div>
      <TaskList tasksList={tasksList} setTasksList={setTasksList}></TaskList>
    </>
  );
}
