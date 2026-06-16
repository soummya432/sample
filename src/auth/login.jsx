import { useState } from 'react';
import './Login.css';
import authService from '../services/authService';
import Signup from './signup';
import { Link } from 'react-router';
import { useNavigate } from 'react-router-dom';                                         
function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate=useNavigate();
    const handleName = (eve) => {
        setName(eve.target.value)

    }

    const handlePassword = (pass) => {
        setPassword(pass.target.value)
    }

   const handleSubmit = async (eve) => {
    eve.preventDefault();

    try {
        const response = await authService.login(name, password);
        console.log(response.data);
        

        setMessage(response.data.message);

        if (response.data.success) {
             console.log("Success");
            console.log(response.data.success);
        
          
            
            navigate('/home');
        }

    } catch(error){

    console.log(error);

    setMessage(
        error.response?.data?.message ||
        "Login Failed"
    );
}
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
                        <div className="i1">
                            <label htmlFor="password">Password</label><br />
                            <input type="password" onChange={handlePassword} />
                        </div>
                        <div className="i1">
                            <button className='b'>Login</button>
                            <p>{message}</p>
                        </div>
                        <div className="i1">
                             <label htmlFor="signup">Dont have an account?</label>
                            <Link to={'/signup'}>Sign up</Link>
                            <br/>
                            <label htmlFor="forgot">Forgot your Password?</label>
                        </div>
                    </form>
                </div>
                <div id="b3"></div>
                <div id="b4"></div>
            </div>
        </>
    );
}
export default Login;