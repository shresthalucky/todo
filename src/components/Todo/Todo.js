import React from 'react';
import { RiDeleteBinLine, RiCheckLine, RiCloseLine } from 'react-icons/ri';

import Button from '../Button/Button';

function Todo({ todo, handleActive, handleDelete }) {

  const handleTodoActive = () => handleActive(todo.id);
  const handleTodoDelete = () => handleDelete(todo.id);

  const iconColor = todo.active ? 'green' : 'blue';

  return (
    <div className="todo clearfix">
      <div className={`todo-contents ${!todo.active && 'fade'}`}>
        <h3 className="title">{todo.title}</h3>
        <p className="description">{todo.description}</p>
      </div>
      <div className="todo-actions">
        <Button clickHandler={handleTodoActive} group={`icon secondary ${iconColor}`}>
          {todo.active ? <RiCheckLine /> : <RiCloseLine />}
        </Button>
        <Button clickHandler={handleTodoDelete} group="icon secondary red">
          <RiDeleteBinLine />
        </Button>
      </div>
    </div>
  )
}

export default Todo;