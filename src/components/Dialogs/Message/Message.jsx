import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div>
            <div className={s.message}>
                <div className={s.messagesItem}>{props.message}</div>
            </div>
        </div>
    );
}

export default Message;