import React from "react";
import "./Styles/NotesList.css";
import SingleNote from "./SingleNote";
import Add from "./Add";
const NotesList = ({ notes, addnote, deletenote }) => {
  return (
    <div className="noteslistmain">
      {notes.map((item) => (
        <SingleNote
          id={item.id}
          text={item.text}
          date={item.date}
          deletenote={deletenote}
        />
      ))}
      <Add addnote={addnote} />
    </div>
  );
};

export default NotesList;
