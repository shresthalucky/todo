import React from 'react';
import { RiArrowUpSLine, RiArrowDownSLine, RiAddLine } from 'react-icons/ri';
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
      isDescription: false
    }
  }

  toggleDescription = () => {
    this.setState({
      isDescription: !this.state.isDescription
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

  render() {
    return (
      <div className="form-wrapper">
        <form>
          <div className="title-wrapper clearfix">
            <div className="title-input">
              <Input
                name="title"
                changeHandler={this.handleInputChange}
                value={this.state.todo.title}
                className="form"
                placeholder="Title"
                inputTag="input"
              />
            </div>

            <div className="form-actions">
              <Button group="icon secondary" type="button" clickHandler={this.toggleDescription}>
                {this.state.isDescription ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </Button>
              <Button group="icon primary" type="submit" clickHandler={this.handleSubmit}>
                <RiAddLine />
              </Button>
            </div>
          </div>

          <div className={`description-wrapper ${this.state.isDescription ? 'active' : ''}`} >
            <Input
              name="description"
              changeHandler={this.handleInputChange}
              value={this.state.todo.description}
              className="form"
              placeholder="Description"
              inputTag="textarea"
            />
          </div>
        </form>
      </div>
    )
  }

}

export default Form;