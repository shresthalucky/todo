import React from 'react';
import Todo from '../../components/Todo/Todo';

class DoneList extends React.Component {

  render() {
    const doneList = this.props.list.filter(e => !e.active);

    return (
      <div>
        {doneList.map(todo => {
          return <Todo todo={todo} key={todo.id} actions={this.props.actions} />
        })}
      </div>
    )
  }
}

export default DoneList;