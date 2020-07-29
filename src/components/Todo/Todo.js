import React from 'react';
import { RiDeleteBinLine, RiCheckLine, RiCloseLine } from 'react-icons/ri';

import Button from '../Button/Button';

function Todo({ todo, actions }) {

  const handleTodoActive = () => actions.handleActive(todo.id);
  const handleTodoDelete = () => actions.handleDelete(todo.id);

  return (
    <div className="todo clearfix">
      <div className="todo-contents">
        <h3 className="title">{todo.title}</h3>
        <p className="description">{todo.description}</p>
      </div>
      <div className="todo-actions">
        <Button clickHandler={handleTodoActive} type="icon">
          {todo.active ? <RiCheckLine /> : <RiCloseLine />}
        </Button>
        <Button clickHandler={handleTodoDelete} type="icon">
          <RiDeleteBinLine />
        </Button>
      </div>
    </div>
  )
}

export default Todo;