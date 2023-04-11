import React, { useState } from 'react'
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function Signup() {
    const [values, setValues] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("")
    const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false)


    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!values.name || !values.email || !values.password) {
            setError("fill all fields");
            return;
        }

        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                setSubmitBtnDisabled(true)

                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name
                });

                navigate("/");
            })
            .catch(e => {
                setError("invaid input");
            })
    }


    return (
        <div className="signup">
            <div className="container">
                <div className="heading">Sign Up</div>

                <label>Name</label>
                <input type="text" label="name" placeholder='enter your name' onChange={e => { setValues(prev => ({ ...prev, name: e.target.value })) }} />

                <label>Email</label>
                <input type="email" label="email" placeholder='enter your email' onChange={e => { setValues(prev => ({ ...prev, email: e.target.value })) }} />

                <label>Password</label>
                <input type="password" label="password" placeholder='enter your password' onChange={e => { setValues(prev => ({ ...prev, password: e.target.value })) }} />

                <span className='error'>{error}</span>
                <button className='btn' onClick={handleSubmit} disabled={submitBtnDisabled}>signup</button>
                <p>already have an account? <span><Link to="/login">login</Link></span></p>
            </div>
        </div>
    )
}
