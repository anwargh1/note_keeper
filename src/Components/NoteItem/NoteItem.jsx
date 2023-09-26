import React, { useState } from 'react'
import {BsTrash3} from 'react-icons/bs'
import './noteItem.css'
import DeleteModel from '../DeleteModel/DeleteModel'
import UpdateModel from '../UpdateModel/UpdateModel'
function NoteItem({note , onDelete , onUpdate}) {
  const [showdeleteModel, setShowdeleteModel] = useState(false)
  const [showUpdateModel, setShowUpdateModel] = useState(false)

  const handelShowdeleteModel =()=>{
    setShowdeleteModel(true)
  }

  const handelUpdateNote =() =>{
    setShowUpdateModel(true)
  }

  return (
    <div  className='note-item'>
        <div   onClick={handelUpdateNote} >
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <p className='creation-date'>{note.creation_date}</p>
      
        </div>
        <div className='hide-trash-icon' onClick={handelShowdeleteModel}>
          <BsTrash3  className='trash-icon'/>
        </div>
       {showdeleteModel &&  <DeleteModel  noteId={note.id} setShowdeleteModel={setShowdeleteModel} onDelete={onDelete}/>}
       {showUpdateModel &&  <UpdateModel  note={note} setShowUpdateModel={setShowUpdateModel} onUpdate={onUpdate}/>}
    </div>
  )
}

export default NoteItem