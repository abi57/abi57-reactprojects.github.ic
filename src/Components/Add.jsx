import React, { useState } from "react";
import "./Styles/Add.css";
const Add = ({ addnote }) => {
  const [notetext, setNotetext] = useState("");
  const charlimit = 300;
  const handlechange = (e) => {
    if (charlimit - e.target.value.length >= 0) {
      setNotetext(e.target.value);
    }
  };
  const Saveclick = () => {
    if (notetext.trim().length > 0) {
      addnote(notetext);
      setNotetext("");
    } else {
      alert("Text is Empty");
    }
  };
  return (
    <div className="addmain">
      <div className="textarea">
        <textarea
          cols="10"
          rows="8"
          onChange={handlechange}
          placeholder="type to add new note.."
          value={notetext}
          style={{
            resize: "none",
            padding: "10px",
            width: "350px",
            height: "170px",
            border: "2px solid black",
          }}
        ></textarea>
      </div>

      <div className="note-footer">
        <small>{charlimit - notetext.length} Remaining</small>
        <button onClick={Saveclick}>Save</button>
      </div>
    </div>
  );
};

export default Add;
