import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Troll</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2"> Aquaman</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Greg</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Margarita</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>cool</div>
                <div className={s.message}>nice</div>
                <div className={s.message}>lol</div>
            </div>
        </div>
    )
}
export default Dialogs;