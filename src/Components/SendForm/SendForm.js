import React, { Component } from 'react';
import './SendForm.css';

class SendForm extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({
      message: ''
    })
    console.log(this.state.message)
  }

  render() {
    console.log(this.state.message)
    return(
      <div className="chat-message">
        <form
          onSubmit={this.handleSubmit}
          className="send-message-form">
          <input
            onChange={this.handleChange}
            value={this.state.message}
            type="text"
            placeholder="Type your message here"
          />
        </form>
      </div>
    );
  }
}

export default SendForm;
