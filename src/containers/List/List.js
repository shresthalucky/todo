import React from 'react';
import Note from '../../components/Note/Note';

class List extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        {this.props.list.map(note => {
          return <Note detail={note} key={note.id} actions={this.props.actions} />
        })}
      </div>
    )
  }
}

export default List;