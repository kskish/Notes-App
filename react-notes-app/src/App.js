import React, { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "1/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my final note",
      date: "7/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: "9/04/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggle={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          setNotes={setNotes}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
