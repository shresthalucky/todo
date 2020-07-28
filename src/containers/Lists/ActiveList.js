import React from 'react';
import Note from '../../components/Note/Note';

class ActiveList extends React.Component {

  render() {
    const activeList = this.props.list.filter(e => e.active);

    return (
      <div>
        {activeList.map(note => {
          return <Note detail={note} key={note.id} actions={this.props.actions} />
        })}
      </div>
    )
  }
}

export default ActiveList;