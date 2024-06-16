import { TaskHeader } from "./TaskHeader";
import { TaskList } from "./TaskList";

export function Tasks({ tasksList, setTasksList }) {
  return (
    <>
      <TaskHeader
        tasksList={tasksList}
        setTasksList={setTasksList}
      ></TaskHeader>
      <TaskList tasksList={tasksList}></TaskList>
    </>
  );
}
