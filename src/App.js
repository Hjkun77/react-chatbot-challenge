import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit';
import MessageList from './Containers/MessageList/MessageList';
import ChatBox from './Containers/ChatBox/ChatBox';
import SendForm from './Components/SendForm/SendForm';
import { instanceLocator, tokenUrl } from './config'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'React-bot',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect().then(currentUser => {

      this.currentUser = currentUser
      this.currentUser.subscribeToRoom({
        roomId: 15412513,
        hooks: {
          onNewMessage: message => {
            console.log("Received new message ", message.text);
            this.setState({
              // Using the spread operator
              messages: [...this.state.messages, message]
            })
          }
        }, messageLimit: 0
      })
    })
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: 15412513,
    })
  }

  render() {
    return(
      <div className="container">
        <MessageList/>
        <div className="grid-container">
          <ChatBox messages={this.state.messages}/>
          <SendForm sendMessage={this.sendMessage}/>
        </div>

      </div>
    );
  }

}

export default App;
