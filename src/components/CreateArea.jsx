import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    noteTitle: "",
    noteContent: "",
    noteId: ""
  });
  const [isNoteClicked, setIsNoteClicked] = useState(false);

  function handleClick() {
    setIsNoteClicked(true);
  }

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
      <form className="create-note" onSubmit={submitNote}>
        {isNoteClicked && <input onChange={handleChange} name="noteTitle" placeholder="Title" value={note.noteTitle}/>}
        <textarea onClick={handleClick} onChange={handleChange} name="noteContent" placeholder="Take a note..." rows={isNoteClicked ? 3: 1} value={note.noteContent}/>
        <Zoom in={isNoteClicked}>
          <Fab type="submit"><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
