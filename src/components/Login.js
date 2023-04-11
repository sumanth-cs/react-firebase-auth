import React, { useState } from 'react'
import "./Login.css"
import { Link,useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase";


export default function Login() {
    const [values, setValues] = useState({ email: "", password: "" });
    const [error, setError] = useState("")
    const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!values.email || !values.password) {
            setError("fill all fields");
            return;
        }

        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                setSubmitBtnDisabled(true)
                navigate("/");
            })
            .catch(e => {
                setError("user not found");
            })
    }

  return (
    <div className="login">
            <div className="l_container">
                <div className="heading">Log In</div>

                <label>Email</label>
                <input type="email" label="email" placeholder='enter your email' onChange={e => setValues(prev => ({...prev,email:e.target.value}))}/>

                <label>Password</label>
                <input type="password" label="password" placeholder='enter your password' onChange={e => setValues(prev => ({...prev,password:e.target.value}))}/>

                <span className='error'>{error}</span>
                <button className='btn' onClick={handleSubmit} disabled={submitBtnDisabled}>login</button>
                <p>don't have an account? <span><Link to="/signup">signup</Link></span></p>
            </div>
        </div>
  )
}
