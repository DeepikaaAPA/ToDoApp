import { useState } from "react";

export function Form({ tasksList, setTasksList }) {
  const [name, setName] = useState("Sample");
  const [desc, setDesc] = useState("Desc");
  const [status, setStatus] = useState("Pending");
  const [newTask, setNewTask] = useState({ name, desc, status });
  console.log("inside form", name, desc, status);
  return (
    <div>
      <form id="task-form">
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="task-name"
          placeholder="Task name"
          value={name}
        ></input>
        <input
          type="text"
          onChange={(event) => {
            setDesc(event.target.value);
          }}
          id="task-desc"
          placeholder="About the task"
          value={desc}
        ></input>

        <a
          className="btn"
          onClick={() => {
           setTasksList([...tasksList,{name,desc,status}])
            // const newRestaurant = {
            //   restaurant_name: name,
            //   restaurant_thumb: poster,
            //   address,
            //   rating,
            //   rating_text,
            //   cost,
            // };
            // setRestaurantData([...restaurantData, newRestaurant]);
          }}
        >
          Add Task
        </a>
      </form>
    </div>
  );
}
