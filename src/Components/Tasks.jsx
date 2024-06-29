import { TaskHeader } from "./TaskHeader";
import { TaskList } from "./TaskList";

export function Tasks({ tasksList, setTasksList }) {
  return (
    <>
      <TaskHeader
       
      ></TaskHeader>
      <TaskList tasksList={tasksList} setTasksList={setTasksList}></TaskList>
    </>
  );
}
