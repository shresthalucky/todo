import React from 'react';

import Button from '../Button/Button';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: {
        title: '',
        description: ''
      },
      display: false
    }
  }

  toggleDisplay = () => {
    this.setState({
      display: !this.state.display
    });
  }

  handleInputChange = (e) => {
    this.setState({
      todo: {
        ...this.state.todo,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      ...this.state.todo,
      'id': Date.now(),
      'active': true
    }

    if (this.state.todo.title) {
      this.props.submitHandler(todo);
      this.toggleDisplay();
    }
  }

  render() {
    return (
      <div className={`form-wrapper ${this.state.display ? 'active' : ''}`}>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <div>
            <input type="text" name="title" value={this.state.todo.title} onChange={this.handleInputChange} />
          </div>

          <label>Description</label>
          <div>
            <textarea name="description" value={this.state.todo.description} onChange={this.handleInputChange} />
          </div>
          <Button type="primary">Add</Button>
          <Button clickHandler={this.toggleDisplay} type="primary">Cancel</Button>
        </form>
      </div>
    )
  }

}

export default Form;