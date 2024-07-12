import "./App.css";
import { Header } from "./Components/Header";
import { Form } from "./Components/Form";
import { Tasks } from "./Components/Tasks";
import { useState } from "react";
let INITIALTASKLIST = [];

function App() {
  let [tasksList, setTasksList] = useState(INITIALTASKLIST);

  return (
    <>
      <Header />
      <Form setTasksList={setTasksList} />
      <Tasks tasksList={tasksList} setTasksList={setTasksList}></Tasks>
    </>
  );
}

export default App;
