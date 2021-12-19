import React from 'react'
import { ErrorMessage ,useField } from 'formik'
import "./SignUp.css";

const TextField = ({ label, ...props}) => {
    const [field,meta] = useField(props)
    console.log(field,meta)
    return (
        <div className="contentTextField">
            <div className="two-field">
                <label htmlFor={field.label} className="label-field">{label}: </label>
                <input  className="search-bar-field"
                {...field} {...props}
                autoComplete='off'
                />
            </div>
            <div className="err">
                <ErrorMessage name={field.name} className="err"/>
            </div>
            
        </div>
    )
}

export default TextField
