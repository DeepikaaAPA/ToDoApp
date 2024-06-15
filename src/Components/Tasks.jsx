import { Form } from "./Form";
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
  return (
    <div className="task-card">
      <h4>{task.name}</h4>
      <p>{task.desc}</p>
    </div>
  );
}
