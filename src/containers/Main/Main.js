import React, { useState, useEffect, useCallback } from "react";

import Routes from "../../routes";
import { ROUTES } from "../../constants";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";

const Main = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [searchText, setSearchText] = useState("");

  const updateLocalStorage = useCallback(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const toggleActive = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, active: !todo.active } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const handleSearchText = useCallback((event) => {
    setSearchText(event.target.value);
  }, []);

  const addTodo = useCallback((todo) => {
    setTodos((todos) => [todo, ...todos]);
  }, []);

  useEffect(updateLocalStorage, [updateLocalStorage]);

  const todoList = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="main-wrapper">
      <Header navs={ROUTES} />

      <main>
        <div className="container">
          <Input
            name="search"
            changeHandler={handleSearchText}
            value={searchText}
            className="search"
            placeholder="Search"
            inputTag="input"
          />
          <Form submitHandler={addTodo} />
          <Routes
            todos={todoList}
            toggleActive={toggleActive}
            deleteTodo={deleteTodo}
          />
        </div>
      </main>
    </div>
  );
};

export default Main;
