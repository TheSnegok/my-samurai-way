import React from 'react'
import f from './FormsControls.module.css' 

const FormsControls = (props) => {
    return (
        <div className={f.formControl}>
            <div className={f.alarm + " " + (props.errors ? f.error : '')}>
                {props.children}
            </div>
            <span className={f.errors}>{props.errors ? props.errors : null}</span>
        </div>
    )
}

export const Textarea = ({form, ...props}) => {
    return <FormsControls {...props}><textarea name={props.field.name} {...props} /></FormsControls>
}

export const Input = ({form, ...props}) => {
    console.log('Visited fields', form.touched);
    return <FormsControls {...props}><input name={props.field.name} {...props} /></FormsControls>
}



