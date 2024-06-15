import "./App.css";
import { Header } from "./Components/Header";
import { Form } from "./Components/Form";
import { Tasks } from "./Components/Tasks";
import { useState } from "react";
let INITIALTASKLIST = [
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

function App() {
  let [tasksList, setTasksList] = useState(INITIALTASKLIST);

  return (
    <>
      <Header />
      <Form  tasksList={tasksList} setTasksList={setTasksList} />
      <Tasks tasksList={tasksList} setTasksList={setTasksList}></Tasks>
    </>
  );
}

export default App;
