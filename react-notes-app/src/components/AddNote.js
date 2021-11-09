import React, { useState } from "react";
import { nanoid } from "nanoid";

const AddNote = ({ notes, setNotes }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: noteText,
        date: date.toLocaleDateString(),
      };

      const newNotes = [...notes, newNote];

      setNotes(newNotes);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add a note"
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
