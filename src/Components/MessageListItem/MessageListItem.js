import React from 'react';
import './MessageListItem.css'

const MessageListItem = (props) => {
  const { profile, name } = props
  return(
    <div className="list-item">
      <img src={profile} alt="avatar"/>
      <div className="name">{name}</div>
    </div>
  );
}

export default MessageListItem;
