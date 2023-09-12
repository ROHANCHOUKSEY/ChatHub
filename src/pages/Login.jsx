import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";

const Login = () => {

  const [err, setErr] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault(); 
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    }catch(error){
    setErr(true);
    console.log('Error during registration:', err);
}
};


  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>FAST CHAT</span>
            <span className='title'>Login</span>
            <form className='form_style' onSubmit={handleSubmit}>
                <input type='email' placeholder='email' className='input_style'/>
                <input type='password' placeholder='password' className='input_style'/>
                <button className='sign_up'>Sign in</button>
                {err && <span>Some thing is wrong</span>}
            </form>
            <p className='details'>You don't have an account?<Link to="/register" className="no-underline">Register</Link></p>
        </div>
    </div>
  )
}
 
export default Login