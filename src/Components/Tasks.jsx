import { useState } from "react";
import { TaskHeader } from "./TaskHeader";
let taskslist = [
  { name: "Planting", desc: "plan tseeds ", status: "Pending" },
  { name: "Mopping", desc: "mop the floors ", status: "Pending" },
  {
    name: "Buy groceries",
    desc: "go to grocers and buy veggies ",
    status: "Completed",
  },
  {
    name: "Baking",
    desc: "Bake cookies and brownies for snacks ",
    status: "Completed",
  },
  { name: "Ironing", desc: "Press uniforms and formals ", status: "Completed" },
];
export function Tasks() {
  return (
    <>
      <TaskHeader></TaskHeader>
      <TaskList></TaskList>
    </>
  );
}
function TaskList() {
  console.log(
    taskslist.map((task, index) => {
      return { name: task.name, id: index };
    })
  );
  return (
    <>
      <div className="container">
        {taskslist.map((task, index) => (
          <TaskCard key="2" task={task} />
        ))}
      </div>
    </>
  );
}

function TaskCard({ key, task }) {
  console.log(key, typeof key);
  const bgcolor = task.status == "Completed" ? "green" : "orange";
  let [statusBg, setStatusBg] = useState(bgcolor);

  return (
    <div className="task-card">
      <h4>{task.name}</h4>
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
    </div>
  );
}
