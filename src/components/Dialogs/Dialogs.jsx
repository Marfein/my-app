import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
    <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>

);
}
const Message =(props)=>{
    return(
        <div className={s.message}>{props.message}</div>
    );
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Troll" id="1"/>
                <DialogItem name="Aquaman" id="2"/>
                <DialogItem name="Greg" id="3"/>
                <DialogItem name="Margaret" id="4"/>

            </div>
            <div className={s.messages}>
                <Message message="hi" />
                <Message message="cool" />
                <Message message="nice" />
                <Message message="lol" />
            </div>
        </div>
    );
}
export default Dialogs;