import React from 'react';
import Note from '../../components/Note/Note';

class DoneList extends React.Component {

  render() {
    const doneList = this.props.list.filter(e => !e.active);

    return (
      <div>
        {doneList.map(note => {
          return <Note detail={note} key={note.id} actions={this.props.actions} />
        })}
      </div>
    )
  }
}

export default DoneList;