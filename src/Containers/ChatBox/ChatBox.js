import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './../../Components/Message/Message';
import './ChatBox.css';


class ChatBox extends Component {

  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this)
      node.scrollTop = node.scrollHeight
    }

  }
  render() {
    return(
      <div className="chat-box" style={{ overflowY: 'scroll', height:'612px'}}>
        {this.props.messages.map((message, index) => {
          return(
            <Message key={index} username={message.senderId} text={message.text}/>
          )
        })}

      </div>
    )
  }
}

export default ChatBox;
