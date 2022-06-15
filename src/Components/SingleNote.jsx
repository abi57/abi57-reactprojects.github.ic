import React from "react";
import "./Styles/SingleNote.css";
const SingleNote = ({ deletenote, text, date, id }) => {
  return (
    <div className="singlenotemain">
      {
        <div className="notecontainer">
          <strong> {text}</strong>
          <small> {date}</small>
          <button onClick={() => deletenote(id)}>Remove</button>
        </div>
      }
    </div>
  );
};

export default SingleNote;
