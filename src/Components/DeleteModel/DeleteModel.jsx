import React from 'react'
import './deleteModel.css'
function DeleteModel({setShowdeleteModel, noteId ,onDelete}) {
    const handelClose =()=>{
        setShowdeleteModel(false)
    }

    const handelDelete =() =>{
        onDelete(noteId)
    }

  return (
    <div className='model'>
        <div className='delete-model'>
            <h1>Note Deletion</h1>
            <p>Are you certain you wish to delete this Note ?</p>
            <div>
                <button onClick={handelClose}>Close</button>
                <button onClick={handelDelete}>Delete</button>
            </div>
        </div>
    </div>
  )

}

export default DeleteModel