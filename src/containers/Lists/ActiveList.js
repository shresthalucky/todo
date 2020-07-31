import React from 'react';
import Todo from '../../components/Todo/Todo';

class ActiveList extends React.Component {

  render() {
    const activeList = this.props.list.filter(e => e.active);

    return (
      <div className="list">
        {activeList.map(todo => {
          return <Todo todo={todo} key={todo.id} actions={this.props.actions} />
        })}
      </div>
    )
  }
}

export default ActiveList;