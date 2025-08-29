import React, { useState } from 'react'
import Add from '../img/addavatar.png';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, db, storage} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';



const Register = () => {
// eslint-disable-next-line
const [err, setErr] = useState(false);
const navigate = useNavigate();
  
const handleSubmit = async (e) =>{
    e.preventDefault(); 
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const storageRef = ref(storage, displayName);
    const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed',  
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(`Upload is ${progress}% complete`);
  },
  (error) => {
    // Handle errors
    console.error('Error during upload:', error);
  },

  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL: downloadURL,
      });
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email, 
        photoURL: downloadURL
      });
      await setDoc(doc(db, "userChats", res.user.uid), {});
      console.log('Registration successful.');
      navigate("/");
      
    });
  } 
);  
}catch(error){
    // setErr(error);
    console.log('Error during registration:', err);
}
};
  
return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>ChatHub</span>
            <span className='title'>Registration</span>
            <form className='form_style' onSubmit={handleSubmit}>
                <input type='text' placeholder='display name'  className='input_style'/>
                <input type='email' placeholder='email'  className='input_style'/>
                <input type='password' placeholder='password'  className='input_style'/>
                <input type='file' id='file' className='photo'/>
                <label htmlFor='file' className='label'>
                <img  src={Add} className='avatarimg' alt=''/>
                <span>Select Avatar</span>
                </label>
                <button className='sign_up'>Sign Up</button>
                {/* <span>{err}</span> */}
            </form>
            <p className='details'>You do have an account?<Link to="/login" className="no-underline">Login</Link></p>
        </div>
    </div>
  )
}

export default Register