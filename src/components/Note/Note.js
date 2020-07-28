import React from 'react';

function Note({ detail, actions }) {

  const handleNoteActive = () => actions.handleActive(detail.id);
  const handleNoteDelete = () => actions.handleDelete(detail.id);

  return (
    <div>
      <h3>{detail.content}</h3>
      <div>
        <button onClick={handleNoteActive}>{detail.active ? 'Done' : 'Undone'}</button>
        <button onClick={handleNoteDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Note;