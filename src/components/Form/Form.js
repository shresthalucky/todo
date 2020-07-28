import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitHandler({
      ...this.state,
      'id': Date.now(),
      'active': true
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.content} onChange={this.handleInputChange} />
        <button type="submit">Add</button>
      </form>
    )
  }

}

export default Form;