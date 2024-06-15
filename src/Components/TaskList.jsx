import { TaskCard } from "./TaskCard";

export function TaskList({ tasksList }) {
  console.log(
    tasksList.map((task, index) => {
      return { name: task.name, id: index };
    })
  );
  return (
    <>
      <div className="container">
        {tasksList.map((task, index) => (
          <TaskCard index={index} task={task} />
        ))}
      </div>
    </>
  );
}
