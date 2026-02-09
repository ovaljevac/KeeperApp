import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    noteTitle: "",
    noteContent: "",
    noteId: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevValue => {
      return {
      ...prevValue,
      [name]: value
    }
    })
  }

  function submitNote(event) {
    event.preventDefault();
    props.addNote(note);

    setNote({
      noteTitle: "",
      noteContent: ""
    })
  }

  return (
    <div>
      <form  onSubmit={submitNote}>
        <input onChange={handleChange} name="noteTitle" placeholder="Title" value={note.noteTitle}/>
        <textarea onChange={handleChange} name="noteContent" placeholder="Take a note..." rows="3" value={note.noteContent}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
