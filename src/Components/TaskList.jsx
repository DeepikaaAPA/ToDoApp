import { TaskCard } from "./TaskCard";

export function TaskList({ filter, tasksList, setTasksList }) {
  // console.log(
  //   tasksList.map((task, index) => {
  //     return { name: task.name, id: index };
  //   })
  // );
  console.log("Filter :", filter);
  return (
    <>
      <div className="container">
        {tasksList
          .filter((task) => filter == "All" || task.status == filter)
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
