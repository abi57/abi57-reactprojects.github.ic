import React, { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Header from "./Components/Header";
import SearchNotes from "./Components/SearchNotes";

import NotesList from "./Components/NotesList";

const App = () => {
  const [search, setSearch] = useState("");

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Hello welcome to Notes application",
      date: "21/5/2022",
    },
    { id: nanoid(), text: "This is my first Notes Setup", date: "21/5/2022" },
    { id: nanoid(), text: "Begin writting your Notes.", date: "21/5/2022" },
  ]);

  ///ADDING NOTE
  const addnote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  //Deleting note
  const deletenote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  // //FOR SAVING THE DATA WHEN YOU CLOSE THE TAB OR REFRESH THE SCREEN
  const savedNotes = JSON.parse(localStorage.getItem("notes"));
  useEffect(() => {
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  {
    /*this is for saving the app data in local storage*/
  }
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  {
    /*this is for saving the app data in local storage*/
  }

  return (
    <div className="appmain">
      <Header />
      <SearchNotes setSearch={setSearch} />
      <NotesList
        notes={notes.filter((note) => note.text.toLowerCase().includes(search))}
        addnote={addnote}
        deletenote={deletenote}
      />
    </div>
  );
};

export default App;
