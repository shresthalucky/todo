import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import AllList from '../Lists/AllList';
import ActiveList from '../Lists/ActiveList';
import DoneList from '../Lists/DoneList';
import Bottom from '../Bottom/Bottom';
import Input from '../../components/Input/Input';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.navs = {
      all: {
        'path': '/'
      },
      active: {
        'path': '/active'
      },
      done: {
        'path': '/done'
      }
    };

    this.randomTodos = [
      {
        active: true,
        description: "Suspendisse potenti nullam ac tortor vitae purus faucibus ornare.",
        id: 1,
        title: "Lorem ipsum dolor sit amet"
      },
      {
        active: true,
        description: "Potenti nullam ac tortor vitae purus faucibus ornare.",
        id: 2,
        title: "Lorem ipsum dolor sit amet"
      },
      {
        active: true,
        description: "Suspendisse potenti nullam ac tortor vitae purus faucibus ornare.",
        id: 3,
        title: "Lorem ipsum dolor sit amet"
      },
      {
        active: true,
        description: "Suspendisse potenti nullam ac tortor vitae purus faucibus ornare.",
        id: 4,
        title: "Lorem ipsum dolor sit amet"
      },
      {
        active: false,
        description: "Hurray! I already did this todo.",
        id: 5,
        title: "Hurray! I already did this todo."
      }
    ]

    this.state = {
      todoList: JSON.parse(localStorage.getItem('todoList')) || [...this.randomTodos],
      searchText: '',
      displayFormHandler: () => { },
    }

    this.actionHandlers = {
      handleActive: (id) => this.handleActions('active', id),
      handleDelete: (id) => this.handleActions('delete', id)
    }

    this.formElement = React.createRef();
  }

  componentDidMount() {
    this.setState({
      displayFormHandler: this.formElement.current.toggleDisplay,
    })
  }

  updateLocalStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
  }

  handleActions = (action, id) => {

    const todo = this.state.todoList.filter(e => {
      if (e.id === id) {
        if (action === 'delete') return false;
        e[action] = !e[action];
      };
      return true;
    });

    this.setState({
      todoList: todo
    }, this.updateLocalStorage);
  }

  handleAddToList = (todo) => {
    console.log(todo);
    this.setState({
      todoList: [todo, ...this.state.todoList],
    }, this.updateLocalStorage)
  }

  handleSearch = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  render() {

    const todoList = this.state.todoList.filter(todo =>
      todo.title.toLowerCase().includes(this.state.searchText.toLowerCase())
    );

    return (
      <>
        <Form submitHandler={this.handleAddToList} ref={this.formElement} />

        <div className="main-wrapper">

          <Header navs={this.navs} />

          <main>
            <div className="container">

              <Input
                name="search"
                changeHandler={this.handleSearch}
                value={this.state.searchText}
                className="search"
                placeholder="Search"
                inputTag="input"
              />

              <Switch>

                <Route exact path={this.navs.all.path}>
                  <AllList list={todoList} actions={this.actionHandlers} />
                </Route>

                <Route exact path={this.navs.active.path}>
                  <ActiveList list={todoList} actions={this.actionHandlers} />
                </Route>

                <Route exact path={this.navs.done.path}>
                  <DoneList list={todoList} actions={this.actionHandlers} />
                </Route>

              </Switch>
            </div>
          </main>

          <Bottom displayFormHandler={this.state.displayFormHandler} />
        </div>
      </>
    )
  }
}

export default Main;
