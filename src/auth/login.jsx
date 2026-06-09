import { useState } from 'react';
import './login.css';
import authService from '../services/authService';
function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

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
                        <h3 id="h1">LOGIN FORM</h3>
                        <div className="i1">
                            <label htmlFor="username">Username</label><br />
                            <input type="text" onChange={handleName} />
                        </div>
                        <div className="i1"><label htmlFor="password">Password</label><br />
                            <input type="password" onChange={handlePassword} /></div>
                        <div className="i1">
                            <button type='submit' className="b">Login</button>
                        </div>
                        <div className="i1"><button className="b">Sign Up</button>
                            <label htmlFor="forgot">Forgot your Password?</label></div>
                    </form>
                </div>
                <div id="b3"></div>
                <div id="b4"></div>
            </div>
        </>
    );
}
export default Login;