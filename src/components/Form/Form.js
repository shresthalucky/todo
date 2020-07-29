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

    if (this.state.content) {
      this.props.submitHandler({
        ...this.state,
        'id': Date.now(),
        'active': true
      });

      this.setState({
        ...this.state,
        content: '',
      })
    }
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