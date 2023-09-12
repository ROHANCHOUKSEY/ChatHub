import React, { useContext } from 'react'
// import Add from '../img/logo_img.png';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {  

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className='logo1'>CHAT HUB</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt='' className='navimg1'/>
        <span>{currentUser.displayName}</span>
        <button className='logout' onClick={()=>signOut(auth)}>LogOut</button>
      </div>
    </div>
  )
}

export default Navbar