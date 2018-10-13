import React from 'react';
import MessageListItem from './../../Components/MessageListItem/MessageListItem.js';
import SearchBox from './../../Components/SearchBox/SearchBox.js';
import './MessageList.css'

const MessageList = (profile, name) => {
  return(
    <div className="message-box">
      <SearchBox/>
      <div style={{ overflowY: 'scroll', height:'612px'}}>
        <MessageListItem name="Elon Musk" profile="https://indstudy.cedev.byu.edu/sites/indstudy.ce.byu.edu/files/avatar1.png"/>
        <MessageListItem name="Emma Watson" profile="https://png2.kisspng.com/20180323/szw/kisspng-face-computer-icons-clothes-button-5ab56d2f4d1af4.4492055215218394073158.png"/>
        <MessageListItem name="Steve Jobs" profile="https://image.flaticon.com/icons/svg/219/219962.svg"/>
        <MessageListItem name="Selena Gomez" profile="https://image.flaticon.com/icons/svg/219/219969.svg"/>
        <MessageListItem name="Pablo Escobar" profile="https://image.flaticon.com/icons/svg/219/219959.svg"/>
        <MessageListItem name="Queen Elizabeth" profile="https://image.flaticon.com/icons/svg/219/219960.svg"/>
      </div>
    </div>
  );
}

export default MessageList;
