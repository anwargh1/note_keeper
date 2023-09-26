import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import notesData from '../data/data';
import NoteItem from '../NoteItem/NoteItem';
import AddNote from '../AddNote/AddNote';
import { format } from 'date-fns';
import './notes.css'
function Notes() {
  const [notes, setNotes] = useState(notesData);
  const [filterNotes, setfilterNotes] = useState(notes);

 

  const handelSearchNotes = noteValue => {
    if (noteValue === '') {
      setfilterNotes(notes);
    } else {
      setfilterNotes(
        notes.filter(
          note =>
            note.title.toLocaleLowerCase().includes(noteValue) ||
            note.content.toLocaleLowerCase().includes(noteValue) ||
            note.creation_date.toLocaleLowerCase().includes(noteValue)
        )
      );
    }
  };

  const handelAddNote = noteValues => {
    const newNote = [
      ...notes,
      {
        id: Math.random().toString(),
        title: noteValues.title,
        content: noteValues.content,
        creation_date: format( new Date(),'dd/MM/yyyy')
      },
    ];

    setNotes(newNote);
    setfilterNotes(newNote);
    localStorage.setItem('notes' ,JSON.stringify(newNote))

  };

  const handelDeleteNote =(noteId) =>{
    const notesAfterDelete = notes.filter(note => note.id !== noteId)
    setNotes(notesAfterDelete);
    setfilterNotes(notesAfterDelete);
    localStorage.setItem('notes' ,JSON.stringify(notesAfterDelete))

  }

  const handelUpdateNote =(updatedNote) =>{
    console.log(updatedNote);
    const notesAfterUpdate = filterNotes.map(note => note.id === updatedNote.id ? updatedNote : note)
    setNotes(notesAfterUpdate);
    setfilterNotes(notesAfterUpdate);
    localStorage.setItem('notes' ,JSON.stringify(notesAfterUpdate))
  }

  const notesItem = filterNotes.map(note => (
    <NoteItem note={note} key={note.id} onDelete ={handelDeleteNote} onUpdate={handelUpdateNote} />
  ));


  useEffect(()=>{
      const allNotes =JSON.parse(localStorage.getItem('notes')) 
      if(allNotes){
        setNotes(allNotes);
        setfilterNotes(allNotes);
      }
  },[])

  return (
    <div className='notes'>
      <SearchBar onSearch={handelSearchNotes} />
      <AddNote onAddNote={handelAddNote} />
      {notesItem}
    </div>
  );
}

export default Notes;
