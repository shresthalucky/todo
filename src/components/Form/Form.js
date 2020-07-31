import React from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';

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
      this.resetTodo();
    }
  }

  resetTodo = () => {
    this.setState({
      todo: {
        title: '',
        description: ''
      }
    });
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.resetTodo();
    this.toggleDisplay();
  }

  render() {
    return (
      <div className={`form-wrapper ${this.state.display ? 'active' : ''}`}>
        <div className="container">
          <form onSubmit={this.handleSubmit}>

            <Input
              name="title"
              changeHandler={this.handleInputChange}
              value={this.state.todo.title}
              className="form"
              inputTag="input"
              label="Title" />

            <Input
              name="description"
              changeHandler={this.handleInputChange}
              value={this.state.todo.description}
              className="form"
              inputTag="textarea"
              label="Description"
            />

            <Button type="submit" group="primary">Add</Button>
            <Button type="reset" clickHandler={this.handleCancel} group="primary">Cancel</Button>
          </form>
        </div>
      </div>
    )
  }

}

export default Form;