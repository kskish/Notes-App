import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, setNotes, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        );
      })}
      <AddNote notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default NotesList;
