import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseContext } from '../../Store/firebase';


function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {db,auth}=useContext(FirebaseContext)
  const handleSignin=(e)=>{
    e.preventDefault()
    try{
      signInWithEmailAndPassword(auth,email,password).then((userData)=>{
        console.log(userData.user.uid);
      }).catch((err)=>{
        if('auth/invalid-email'===err.code){
          console.log("error");
        }
        
      })
    }catch(err){
      
    }
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src= {Logo} alt='logo'></img>
        <form onSubmit={handleSignin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}

          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
