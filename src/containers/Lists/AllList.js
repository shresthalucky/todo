import React from 'react';
import Todo from '../../components/Todo/Todo';

class AllList extends React.Component {

  render() {
    return (
      <div className="list">
        {this.props.list.map(todo => {
          return <Todo todo={todo} key={todo.id} actions={this.props.actions} />
        })}
      </div>
    )
  }
}

export default AllList;