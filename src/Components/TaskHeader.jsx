export function TaskHeader() {
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
            {"   "}
            <select>
              <option>All</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </h5>
        </div>
      </div>
    </>
  );
}