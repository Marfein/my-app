import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likecounts={p.likecounts} dislikecounts={p.dislikecounts} />);
    let addPost =()=>{
        alert('You lose')
    }
    return (<div className={s.postsBlock}>
        <div>
            My posts
            <div>
                <div className={s.postsBlock}><textarea></textarea></div>
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