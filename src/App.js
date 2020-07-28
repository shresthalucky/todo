import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import ActiveList from './containers/Lists/ActiveList';
import DoneList from './containers/Lists/DoneList';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.navs = {
      'active': {
        'path': '/active'
      },
      'done': {
        'path': '/done'
      }
    };

    this.state = {
      'todoLists': [],
    }

    this.actionHandlers = {
      handleActive: (id) => this.handleActions('active', id),
      handleDelete: (id) => this.handleActions('delete', id)
    }

  }

  handleActions = (action, id) => {

    const note = this.state.todoLists.filter(e => {
      if (e.id === id) {
        if (action === 'delete') return false;
        e[action] = !e[action];
      };
      return true;
    });

    this.setState({
      todoLists: note
    });
  }

  handleAddToList = (content) => {
    console.log(content);
    this.setState({
      todoLists: [...this.state.todoLists, content],
    })
  }

  render() {
    return (
      <div>
        <Navbar items={this.navs} />
        <main>
          <Switch>

            <Route exact path="/" render={() => <Redirect to={this.navs.active.path} />} />

            <Route exact path={this.navs.active.path}>
              <Form submitHandler={this.handleAddToList} />
              <ActiveList list={this.state.todoLists} actions={this.actionHandlers} />
            </Route>

            <Route exact path={this.navs.done.path}>
              <DoneList list={this.state.todoLists} actions={this.actionHandlers} />
            </Route>

          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
