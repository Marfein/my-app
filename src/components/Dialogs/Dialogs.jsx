import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div>
            <Message/>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElements}</div>
                <div className={s.messages}>
                    <div>{messagesElement}</div>
                    <div className={s.messages}>
                        <textarea value={newMessageBody} onChange={onNewMessageChange}
                                  placeholder='Enter your message'></textarea>
                    </div>
                    <div className={s.messages}>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;