import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import List from './containers/List/List';

class App extends React.Component {

  constructor() {
    super();
    this.navStatus = ['active', 'done', 'archive'];
    this.state = {
      'todoLists': [],
    }

    this.actionHandlers = {
      handleActive: (id) => this.handleActions('active', id),
      handleArchive: (id) => this.handleActions('archive', id),
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
        <Navbar status={this.navStatus} />
        <main>
          <Form submitHandler={this.handleAddToList} />
          <List list={this.state.todoLists} actions={this.actionHandlers} />
        </main>
      </div>
    )
  }
}

export default App;
