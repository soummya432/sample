import { useState } from 'react';
import './Login.css';
import authService from '../services/authService';
import Signup from './signup';
import { Link } from 'react-router';
import { useNavigate } from 'react-router-dom';  
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';                                       
function Login() {
    const LoginSchema = Yup.object().shape({
            name: Yup.string()
                .min(2, 'Too Short!')   
                .max(50, 'Too Long!')       
                .required('Required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Required'),                                                                                                          
        });                         
    // const [name, setName] = useState('')
    // const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate=useNavigate();
    // const handleName = (eve) => {
    //     setName(eve.target.value)

    // }

    // const handlePassword = (pass) => {
    //     setPassword(pass.target.value)
    // }

   const handleSubmit = async (values) => {

   try {
    const response = await authService.login(values.name, values.password);

    console.log(response.data);

    if (response.data.success) {

        localStorage.setItem(
            "user",
            JSON.stringify(response.data.data)
        );

        setMessage("Login Successful");

        navigate("/home");
    }

} catch (error) {
    console.log(error);

    setMessage(
        error.response?.data?.message || "Login Failed"
    );
}
}
    return (
        <>
            <div id="parent">
                <div id="b1"></div>
                <div id="b2"></div>
                <div id="login">
     <h1>Login</h1>
     <Formik
       initialValues={{
         name: '',
         password: '',
       }}
       validationSchema={LoginSchema}
       onSubmit={handleSubmit}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="name" 
           placeholder="name"
           className="input-field"
           />
           {errors.name && touched.name &&(
             <div>{errors.name}</div>
           )}
           <Field name="password"
            type="password"
            placeholder="Password"
            className="input-field"
           />
           {errors.password && touched.password &&(
             <div>{errors.password}</div>
           )}
           <button type="submit">Login</button>
           
         </Form>
       )}
     </Formik>
                </div>
                <div id="b3"></div>
                <div id="b4"></div>
            </div>
        </>
    );
}
export default Login;