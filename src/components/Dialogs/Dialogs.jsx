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
    let dialogs = [
        {id:1,name:'Troll'},
        {id:2,name:'Aguaman'},
        {id:3,name:'Greg'},
        {id:4,name:'Margaret'}
    ]
    let messages = [
        {id:1,message:'Hi'},
        {id:2,message:'cool'},
        {id:3,message:'nice'},
        {id:4,message:'lol'}];

    let dialogsElements = dialogs.map(d =><DialogItem name={d.name} id={d.id} />);
    let messagesElement = messages.map(m =><Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
}
export default Dialogs;