import { useRef, useState } from "react";
import { useEffect } from "react";

export function TaskCard({ index, task, setTasksList }) {
  console.log("Task card loaded");
  const [editMode, setEditMode] = useState(false);
  const descref = useRef(null);
  useEffect(() => {
    console.log("use effect", task.name, task.status, descref.current.value);
    descref.current.value = task.desc;
  });
  const handleChangeStatus = (event) => {
    setTasksList((prev) =>
      prev.map((t) => {
        t.name === task.name && (t.status = event.target.value);
        return t;
      })
    );
  };
  const handleEdit = () => {
    if (editMode) {
      setTasksList((prev) =>
        prev.map((t) =>
          t.name === task.name ? { ...t, desc: descref.current.value } : t
        )
      );
    } else {
      descref.current.value = task.desc;
      descref.current.focus();
    }

    setEditMode(!editMode);
  };
  return (
    <div className="task-card">
      <h4>{index + 1 + " )  " + task.name}</h4>

      <textarea
        rows={8}
        cols={10}
        id="edit"
        ref={descref}
        className="editdesc"
        defaultValue={task.desc}
        readOnly={!editMode}
      ></textarea>
      <br></br>
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
      <br></br>
      <button className="btn" onClick={handleEdit}>
        {editMode ? "Save" : "Edit"}
      </button>
      <button
        className="btn"
        onClick={() => {
          setTasksList((prev) => prev.filter((t) => t.name != task.name));
        }}
      >
        Delete
      </button>
    </div>
  );
}
