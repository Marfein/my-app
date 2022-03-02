import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/state";

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likecounts={p.likecounts} dislikecounts={p.dislikecounts} />);
   let newPostElement = React.createRef();
    let addPost = () => {
            props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text=newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (<div className={s.postsBlock}>
        <div>
            My posts
            <div>
                <div className={s.postsBlock}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div className={s.postsBlock}>
                    <button onClick={ addPost }>New Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    </div>);
}
export default MyPosts;