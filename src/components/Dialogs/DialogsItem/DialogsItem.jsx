import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {

    let dialogName = props.dialogs.map(dialog => (
        <div className={s.dialog} key={dialog.id}>
            <NavLink to={"/dialogs/" + dialog.id} activeClassName={s.active}>{dialog.name}</NavLink>
        </div>
    ));

    return (
        <div>
            {dialogName}
        </div>
    );
}

export default DialogsItem;