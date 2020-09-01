import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'message'} component={'textarea'} cols="100" rows="5" />
            <button onClick={props.addMessageActionCreator}>Send message</button>
        </form>
    )
}

const ReduxMessageForm = reduxForm({
    form: 'message'
})(MessageForm);

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
                <ReduxMessageForm onSubmit={addMessageActionCreator} />
            </div>
        </div>
    );
}

export default Dialogs;