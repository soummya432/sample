import { useState } from 'react';
import './Signup.css';
import authService from '../services/authService';
function Signup() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email,setEmail]=useState('')
    const handleEmail = (mail) => {
        setEmail(mail.target.value)

    }

    const handleName = (eve) => {
        setName(eve.target.value)

    }

    const handlePassword = (pass) => {
        setPassword(pass.target.value)
    }

    const handleSubmit = (eve)=>{
        eve.preventDefault()
        authService.login(name, password)
    }

    return (
        <>
            <div id="parent">
                <div id="b1"></div>
                <div id="b2"></div>
                <div id="login">
                    <form onSubmit={handleSubmit}>
                        <h3 id="h1">SIGNUP PAGE</h3>
                         <div className="i1">
                            <label htmlFor="email">email</label><br />
                            <input type="email" onChange={handleEmail} />
                        </div>
                        <div className="i1">
                            <label htmlFor="username">Username</label><br />
                            <input type="text" onChange={handleName} />
                        </div>
                        <div className="i1">
                            <label htmlFor="password">Set Password</label><br />
                            <input type="password" onChange={handlePassword} />
                        </div>
                        <div className="i1">
                            <button type='submit' className="b">Sign up</button>
                        </div>
    
                    </form>
                </div>
                <div id="b3"></div>
                <div id="b4"></div>
            </div>
        </>
    );
}
export default Signup;