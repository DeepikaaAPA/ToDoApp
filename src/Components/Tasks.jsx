import { Form } from "./Form";
import { TaskHeader } from "./TaskHeader";
let tasks = [
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
  return (
    <>
      <div className="container">
        {tasks.map((task, index) => (
          <TaskCard id={index} task={task}></TaskCard>
        ))}
      </div>
    </>
  );
}
function TaskCard({index, task }) {
  return (

      <div  className="task-card">taskcard</div>
    
  );
}
