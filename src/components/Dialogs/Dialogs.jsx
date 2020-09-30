import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { Textarea } from '../common/FormsControl/FormsControls';

const MessageForm = (props) => {
    return (
        <Formik initialValues={{
            message: ''
        }}
            onSubmit={(values) => {
                props.onSubmit(values);
            }}
            validate={(values) => {
					let errors = {};
					if(!values.message) {
						errors.errorText = 'Values is null';
					} 
					if (values.message.length > 5) {
						errors.errorText = `Max length is 5`;
					}
					return errors;
				}}>
            {({
                values,
                handleChange,
                handleBlur,
                errors,
                touched
            }) => (
                    <Form>
                        <Field name='message'
                        component={Textarea} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        errors={errors.errorText}
                        touched={touched}
                        cols="100" rows="5" />
                        <button type='submit'>Send message</button>
                    </Form>
                )}
        </Formik>
    )
}

const Dialogs = (props) => {
    let mas = props.dialogsPage.messages, dialogs = props.dialogsPage.dialogs;
    let messages = mas.map(message => <Message key={message.id} message={message.message} />);

    let addMessageActionCreator = (values) => {
        props.addMessageActionCreator(values.message);
    }

    if (!props.isAuth) return <Redirect to='/Login' />;

    return (
        <div className={s.main}>
            <div className={s.dialogsItem}>
                <DialogsItem dialogs={dialogs} />
            </div>
            <div className={s.line}></div>
            <div className={s.messagesItem}>
                {messages}
                <MessageForm onSubmit={addMessageActionCreator} />
            </div>
        </div>
    );
}

export default Dialogs;