import React, { useState } from 'react';
import './updateModel.css';
function UpdateModel({ setShowUpdateModel, note, onUpdate }) {
  const [newValue, setNemValue] = useState(note);

  const handelCloseModel = () => {
    setShowUpdateModel(false);
  };

  const handelNewValue = e => {
    setNemValue({
      ...newValue,
      [e.target.name]: e.target.value,
    });
  };

  const handelSaveUpdate = e => {
    onUpdate(newValue);
    handelCloseModel()
  };

  return (
    <div className="model">
      <div className="delete-model">
        <input value={newValue.title} name="title" onChange={handelNewValue} />
        <input
          value={newValue.content}
          name="content"
          onChange={handelNewValue}
        />
        <input
          value={newValue.creation_date}
          name="creation_date"
          onChange={handelNewValue}
        />

        <div>
          <button onClick={handelCloseModel}>Close</button>
          <button onClick={handelSaveUpdate}>Done</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateModel;
