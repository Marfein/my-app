import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import Post from "../Profile/MyPosts/Post/Post";


const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let addMessage =()=>{
        let text = newMessageElement.current.value;
        alert(text)
    }
    let dialogsElements = props.state.dialogs.map(d =><DialogItem name={d.name} id={d.id}  key={d.id} />);
    let messagesElement = props.state.messages.map(m =><Message message={m.message} key={m.message}/>)
    return (
        <div>
            <Message/>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElements}</div>
                <div className={s.messages}>
                    {messagesElement}
                </div>
                <div className={s.messages}><textarea ref={newMessageElement}></textarea></div>
                <div className={s.messages}>
                    <button onClick={ addMessage }>New message</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;