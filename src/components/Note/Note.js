import React from 'react';

function Note({ detail, actions }) {

  const handleNoteArchive = () => actions.handleArchive(detail.id);
  const handleNoteActive = () => actions.handleActive(detail.id);
  const handleNoteDelete = () => actions.handleDelete(detail.id);

  const activeText = detail.active ? 'Done' : 'Undone';
  const archiveText = detail.archive ? 'Unarchive' : 'Archive';

  return (
    <div>
      <h3>{detail.content}</h3>
      <div>
        <button onClick={handleNoteActive}>{activeText}</button>
        <button onClick={handleNoteArchive}>{archiveText}</button>
        <button onClick={handleNoteDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Note;