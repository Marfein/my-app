import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (<div className={s.postsBlock}>
        <div>
            My posts
            <div>
                <div className={s.postsBlock}><textarea></textarea></div>
                <div className={s.postsBlock}><button>New Post</button></div>
            </div>
            <div className={s.posts}>
                <Post message='hi, fuck you' likecounts='1 ' dislikecounts='3'/>
                <Post message='no, fuck you' likecounts='5 ' dislikecounts='6'/>
            </div>
        </div>
    </div>);
}
export default MyPosts;