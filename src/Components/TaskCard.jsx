import { useRef, useState } from "react";
import { useEffect } from "react";

export function TaskCard({ index, task, setTasksList, tasksList }) {
  const [editMode, setEditMode] = useState(false);
  console.log(index, task.status, task.desc);
  const [EditBtnText, setEditButtonText] = useState("Edit");
  const [editInput, setEditInput] = useState(task.desc);
  const descref = useRef(null);
  // console.log(color, statusBg);
  // useEffect(() => {
  //   setStatusBg(color);
  // }, [color]);
  // console.log(task.status, statusBg);
  const handleChangeStatus = (event) => {
    // // console.log("changed");
    // setStatusBg(event.target.value == "Completed" ? "green" : "orange");
    setTasksList(
      tasksList.map((t) => {
        t.name == task.name && (t.status = event.target.value);
        return t;
      })
    );
  };
  const handleEdit = () => {
    //console.log(descref.defaultValue);
    if (editMode) {
      console.log(editInput);
      setTasksList(
        tasksList.map((t, i) => (index === i ? { ...t, desc: editInput } : t))
      );
    } else {
      // descref.current.value = initialdesc;
      descref.current.focus();
    }
    // setEditButtonText(editMode ? "Edit" : "Save");
    setEditMode(!editMode);
  };
  return (
    <div className="task-card">
      <h4>
        {index + 1}
        {" )  "}
        {task.name}
      </h4>
      {editInput}
      <br></br>
      {task.desc}
      <br></br>
      <input
        ref={descref}
        className="editdesc"
        onChange={(event) => {
          setEditInput(event.target.value);
          setTasksList(
            tasksList.map((t) =>
              t.name===task.name? { ...t, desc: editInput } : t
            )
          );
        }}
        value={editInput}
        // defaultValue={task.desc}
        //readOnly={!editMode}
        style={{ width: "150px", height: "30px" }}
      ></input>
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
