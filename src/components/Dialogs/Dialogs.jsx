import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}> Troll</div>
                <div className={s.dialog}> Aquaman</div>
                <div className={s.dialog}> Greg</div>
                <div className={s.dialog}> Margarita</div>
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