import { useRef, useState } from "react";
import { useEffect } from "react";

export function TaskCard({ index, task, setTasksList, tasksList }) {
  const [editMode, setEditMode] = useState(false);
  console.log(index, task.status, task.desc);
  // let color = task.status == "Completed" ? "green" : "orange";
  // const [statusBg, setStatusBg] = useState(color);
  const [EditBtnText, setEditButtonText] = useState("Edit");
  const [editInput, setEditInput] = useState(task.desc);
  const initialdesc = editInput ? task.desc : "";
  const descref = useRef(null);
  // console.log(color, statusBg);
  // useEffect(() => {
  //   setStatusBg(color);
  // }, [color]);
  // console.log(task.status, statusBg);
  return (
    <div className="task-card">
      <h4>
        {index + 1}
        {" )  "}
        {task.name}
      </h4>
      {task.desc}
      <br></br>
      <input
        ref={descref}
        className="editdesc"
        onBlur={(event) => {
          setEditInput(event.target.value);
        }}
        readOnly={!editMode}
        style={{ width: "150px", height: "30px" }}
      ></input>
      <select
        onChange={(event) => {
          // // console.log("changed");
          // setStatusBg(event.target.value == "Completed" ? "green" : "orange");
          setTasksList(
            tasksList.map((t) => {
              t.name == task.name && (t.status = event.target.value);
              return t;
            })
          );
        }}
        style={{
          // backgroundColor: statusBg,
          backgroundColor: task.status == "Completed" ? "green" : "orange",
        }}
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
      <br></br>
      <br></br>
      <button
        className="btn"
        onClick={() => {
          console.log(descref.defaultValue);
          if (editMode) {
            console.log(editInput);
            setTasksList(
              tasksList.map((t) => {
                t.name == task.name && (t.desc = editInput);
                return t;
              })
            );
            setEditInput("XXX");
          } else {
            //descref.style.display = "block";
            descref.current.value = initialdesc;
            descref.current.focus();
          }
          setEditButtonText(editMode ? "Edit" : "Save");
          setEditMode(!editMode);
        }}
      >
        {EditBtnText}
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
