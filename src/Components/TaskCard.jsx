import { useRef, useState } from "react";
import { useEffect } from "react";

export function TaskCard({ index, task, setTasksList, tasksList }) {
  const [editMode, setEditMode] = useState(false);
  console.log(index, task.name, task.status, task.desc);
  // const [editInput, setEditInput] = useState(task.desc);
  const descref = useRef(null);

  const handleChangeStatus = (event) => {
    setTasksList((prev) =>
      prev.map((t) => {
        t.name === task.name && (t.status = event.target.value);
        return t;
      })
    );
  };
  const handleEdit = () => {
    //console.log(descref.defaultValue);
    if (editMode) {
      // console.log(editInput);
      // setEditInput(descref.current.value);
      setTasksList((prev) =>
        prev.map((t) =>
          t.name === task.name ? { ...t, desc: descref.current.value } : t
        )
      );
    } else {
      // descref.current.value = initialdesc;
      descref.current.focus();
    }

    setEditMode(!editMode);
  };
  return (
    <div className="task-card">
      <h4>
        {index + 1}
        {" )  "}
        {task.name}
      </h4>
      {task.desc}
      {"--"}
      <br></br>
      <input
        id="edit"
        ref={descref}
        className="editdesc"
        onChange={() => {
          console.log("changed");
        }}
        defaultValue="{task.desc}"
      ></input>
      <br></br>
      <select
        value={task.status}
        onChange={handleChangeStatus}
        style={{
          backgroundColor: task.status === "Completed" ? "green" : "orange",
        }}
      >
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>

      <br></br>
      <button className="btn" onClick={handleEdit}>
        {editMode ? "Save" : "Edit"}
      </button>
      <button
        className="btn"
        onClick={() => {
          // console.log(statusBg);
          setTasksList(tasksList.filter((t) => t.name != task.name));
        }}
      >
        Delete
      </button>
    </div>
  );
}
