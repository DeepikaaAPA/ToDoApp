export function Form() {
  return (
    <>
      <form id="task-form">
        <input
          type="text"
          id="task-name"
          value=""
          placeholder="Task name"
        ></input>
        <input
          type="text"
          id="task-desc"
          value=""
          placeholder="About the task"
        ></input>
        <button id="btn-add-task">Add Task</button>
      </form>
    </>
  );
}
