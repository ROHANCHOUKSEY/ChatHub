import React, { useContext } from 'react'
import cam from '../img/cam.png';
import add from'../img/add.png';
import more from '../img/more.png';
import Messages from './Messages';
import Input from './Input';
import menu from '../img/menu.png';
import { ChatContext } from '../context/ChatContext';


const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="navbaricon">
        <div className="cross">
          <img src={menu} style={{height:"20px"}} alt='' className='menu'/>
        </div>
        <div className='chatIcons'>
          <img src={cam} alt='' className='logos'/>
          <img src={add} alt='' className='logos'/>
          <img src={more} alt=''className='logos'/>
        </div>
      </div>
        </div>
      <Messages/>
      <Input/>
  </div>
  )
}

export default Chat