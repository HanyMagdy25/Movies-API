import React from 'react';
import "./SignUp.css";
import { Formik, Form} from 'formik';
import * as yup from 'yup';
import TextField from './TextField';



const SignUp = () => {

    const validate = yup.object({
        firstName :yup.string().max(15,"Enter less than 15 characters").required('Required'),
        lastName :yup.string().max(15,"Enter less than 15 characters").required('Required'),
        email :yup.string().email("Email Is Invalid").required('Required'),
        password :yup.string().min(6,"Less than 6 character ").required('Required'),
        confirmPassword :yup.string().oneOf([yup.ref("password"),null],"Confirm password does not match").required('Required'),
    })

    return (
        <Formik 
        initialValues={{
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        }}
        validationSchema={validate}
        >
        {formik =>(
            <div className="signUP">
                <h1>Sign Up</h1>
                {console.log(formik)}
                <Form >
                    <TextField label="First Name" className="search-field" name="firstName" type="text"/>
                    <TextField label="Second Name" className="search-field" name="lastName" type="text"/>
                    <TextField label="Email" className="search-field" name="email" type="email"/>
                    <TextField label="Password" className="search-field" name="password" type="password"/>
                    <TextField label="Confirm Password" className="search-field" name="confirmPassword" type="password"/>
                    <button type="submit" className="btn-form">Sign Up</button>    
                </Form>
            </div>
        )}  
        </Formik>
    )
}

export default SignUp
