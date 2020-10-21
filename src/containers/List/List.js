import React from "react";
import Todo from "../../components/Todo/Todo";

const List = ({ todos, toggleActive, deleteTodo }) => {
  return (
    <div className="list">
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            handleActive={toggleActive}
            handleDelete={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default List;
