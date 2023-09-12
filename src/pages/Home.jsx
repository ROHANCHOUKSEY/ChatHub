import React from 'react'
import Sidebar from "../componenet/Sidebar";
import Chat from "../componenet/Chat"

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home