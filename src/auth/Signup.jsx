import { useState } from 'react';
import './Signup.css';
import authService from '../services/authService';
import Login from './login';
import { Link } from 'react-router';
function Signup() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const handleEmail = (mail) => {
        setEmail(mail.target.value)

    }

    const handleName = (eve) => {
        setName(eve.target.value)

    }

    const handlePassword = (pass) => {
        setPassword(pass.target.value)
    }

    const handleSubmit = async (eve) => {
    eve.preventDefault();

    try {
        const response = await authService.Signup(email,name, password);

        setMessage(response.data.message);
    }
    catch(error){
        setMessage("Signup Failed");
        console.log(error);
    }
}

    return (
        <>
            <div id="parent">
                <div id="b1"></div>
                <div id="b2"></div>
                <div id="signup">
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
                            <p>{message}</p>                       
                        </div>
                         <div className="i1">
                        <label htmlFor="login">Login again?</label>
                        <Link to={'/Login'}>Login</Link>
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