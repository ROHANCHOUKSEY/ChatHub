import React, { useContext, useRef, useEffect } from 'react'
// import send_logo from '../img/logo_img.png';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({message}) => {

  const{currentUser} = useContext(AuthContext);
  const{data} = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);


  return (
    <div
    ref={ref} 
    className={`message ${message.senderId === currentUser.uid && "owner"}`}> 
      <div className="messageInfo">
        <img 
        src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt='' className='img_send'/>
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p className='send_mes'>{message.text}</p>
        {message.img && <img src={message.img} className='img_send2' alt=''/>}
      </div>
    </div>
  )
}

export default Message