import { useState } from 'react';
import './Signup.css';
import authService from '../services/authService';
import Login from './login';
import { Link } from 'react-router';
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';

function Signup() {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')   
            .max(50, 'Too Long!')       
            .required('Required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Required'),                                                                                                          
        email: Yup.string()
            .email('Invalid email')
            .required('Required')
    });                         
    // const [name, setName] = useState('')
    // const [password, setPassword] = useState('')
    // const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    // const handleEmail = (mail) => {
    //     setEmail(mail.target.value)

    // }

    // const handleName = (eve) => {
    //     setName(eve.target.value)

    // }

    // const handlePassword = (pass) => {
    //     setPassword(pass.target.value)
    // }

    const handleSubmit = async (values) => {

    try {
        const response = await authService.Signup(values.email, values.name, values.password);

        setMessage(response.data.message);
    }
    catch(error){

    console.log(error);

    setMessage(
        error.response?.data?.message ||
        "Signup Failed"
    );
}
}

    return (
        <>
            <div id="parent">
                <div id="b1"></div>
                <div id="b2"></div>
                <div id="signup">
     <h1>Signup</h1>
     <Formik
       initialValues={{
         name: '',
         password: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={handleSubmit}
     >
       {({ errors, touched }) => (
         <Form>
           <Field
            name="name"
            placeholder="name"
            className="input-field"
            />
           {errors.name && touched.name&& (
             <div className="error">{errors.name}</div>
           )}
           <Field
           type="password" 
           name="password" 
           placeholder="Password"
           className="input-field"/>
           {errors.password && touched.password && (
             <div className="error">{errors.password}</div>
           )}
           <Field name="email"
           placeholder="Email"
           className="input-field"/>
           {errors.email && touched.email && (
             <div className="error">{errors.email}</div>
           ) }

           <button type="submit">Signup</button>
            <label htmlFor="login">Login again?</label>
                        <Link to={'/login'}>Login</Link>

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
export default Signup;