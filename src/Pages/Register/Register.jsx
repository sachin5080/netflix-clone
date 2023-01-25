import React, { useRef, useState } from 'react'
import "./Register.scss"

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }
    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflixlogo" />
            <button className="loginbutton">Sign In</button>
            
            </div>
            <div className="container">
                <h1>Unlimited movies, Tv shows & more!</h1>
                <h2>Watch anywhere, cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                {
                    !email ? (
                        <div className="input">
            <input type="email" placeholder='Email address' ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>Get started</button>

                 </div>
                    ) : (<form className="input">
                    <input type="password" placeholder='password' ref={passwordRef} />
                    <button className="registerButton" onClick={handleFinish}>Start</button>
        
                         </form>)
                }
                

            </div>
        </div>
     </div>
      
   
  )
}
