import { Field } from 'formik';
import React from 'react'
import f from './FormsControls.module.css' 

const FormsControls = (props) => {
    let hasError = props.errors && props.touched; 
    return (
        <div className={f.formControl}>
            <div className={f.alarm + " " + ( hasError ? f.error : '')}>
                {props.children}
            </div>
            <span className={f.errors}>{ hasError ? props.errors : null}</span>
        </div>
    )
}

export const Textarea = ({form, ...props}) => {
    return <FormsControls {...props}><textarea name={props.field.name} {...props} /></FormsControls>
}

export const Input = ({form, ...props}) => {
    return <FormsControls {...props}><input name={props.field.name} {...props} /></FormsControls>
}

export const CreateField = (handleChange, handleBlur, placeholder, name, values = '', errors = '', touched = '', type = '', autoComplete='') => (
    <Field onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        name={name} component={Input}
        value={values} 
        errors={errors}
        touched={touched} 
        autoComplete={autoComplete}
        type={type}/>
)