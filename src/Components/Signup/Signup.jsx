import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../Store/firebase';
import {
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  // onAuthStateChanged,
} from "firebase/auth";
import { addDoc, collection } from 'firebase/firestore';






export default function Signup() {
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {db,auth}=useContext(FirebaseContext)
  const navigate=useNavigate()
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    try{
      createUserWithEmailAndPassword(auth,email,password).then((result)=>{
        addDoc(collection(db,'users'),{
          id:result.user.uid,
          profileName:username,
          phone:phone
        }).then(()=>{
          navigate('/login')
        })
      })
    }catch(err){
      console.log(err);
    }
    
    
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={username}
            type="text"
            
            name="name"
            onChange={(e)=>setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
        
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
}
