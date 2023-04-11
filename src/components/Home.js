import React, { useState } from 'react'
import "./Home.css"
import { auth } from "../firebase";
import { useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

export default function Home() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(authuser => {
      setUser(authuser)
    })

  }, [])

  const hadleSubmit = () => {
    signOut(auth)
    .then(() => {
      navigate("/login")
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className='home'>
      {
        user
          ?
          <><h1>Hello World!</h1>
            <button className='btn' style={{ width: "25%", marginTop: "0px" }} onClick={hadleSubmit}>logout</button>
          </>
          : <span style={{ fontSize: "3rem", fontWeight: "bold" }}> please <Link to="/login"> login </Link></span>
      }
    </div>
  )
}
