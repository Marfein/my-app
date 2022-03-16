import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements =
        props.posts.map(p => <Post message={p.message} likecounts={p.likecounts} dislikecounts={p.dislikecounts} key={p.id}/>);
   let newPostElement = React.createRef();
    let onAddPost = () => {
         props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }
    return (<div className={s.postsBlock}>
        <div>
            My posts
            <div>
                <div className={s.postsBlock}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div className={s.postsBlock}>
                    <button onClick={ onAddPost }>New Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    </div>);
}
export default MyPosts;