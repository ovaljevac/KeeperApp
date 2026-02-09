import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [noteList, setNoteList] = useState([]);
  
  function addNote(note) {
    note.noteId = uuidv4();
    setNoteList(prevValue => {
      return [...prevValue, note];
    }) 
  }

  function deleteNote(noteId) {
    setNoteList(prev => prev.filter(item => item.noteId !== noteId));
  }


  

  return (
    <div>
      <Header />
      <CreateArea 
        addNote = {addNote}
      />
      {noteList.map((item) => {
        return <Note
          key = {item.noteId}
          id = {item.noteId}
          title = {item.noteTitle}
          content = {item.noteContent}
          deleteNote = {deleteNote}
          />
      })}
      <Footer />
    </div>
  );
}


export default App;
