import React, { useState } from 'react';

function AddNote({ onAddNote }) {
  const [inputValue, setInputValue] = useState({
    title: '',
    content: '',
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const handelTitleChange = e => {
    setInputValue(
        {...inputValue,
        title: e.target.value,}
       );
  };

  const handelContentChange = e => {
    setInputValue(
        {...inputValue,
        content: e.target.value,}
       );
  };

  const handelClickInput = () => {
    setIsExpanded(true);
  };

  const handelOnAdd = () => {
    setInputValue({
      title: '',
      content: '',
    });
    onAddNote(inputValue);
  };

  const handelOnCancel = () => {
    setIsExpanded(false);
  };

  return (
    <div>
      {isExpanded ? (
        <div>
          <input
            placeholder="Title"
            value={inputValue.title}
            onChange={handelTitleChange}
            onClick={handelClickInput}
          />

          <input
            placeholder="Take a note ..."
            value={inputValue.content}
            onChange={handelContentChange}
            onClick={handelClickInput}
          />

          <div>
            <button onClick={handelOnAdd}>Add</button>
            <button onClick={handelOnCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        <input
          placeholder="Take a note ..."
          value={inputValue.content}
          onChange={handelContentChange}
          onClick={handelClickInput}
        />
      )}
    </div>
  );
}

export default AddNote;
