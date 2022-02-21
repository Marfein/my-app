import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'hi, fuck you', likecounts: 1, dislikecounts: 3},
        {id: 2, message: 'no, fuck you', likecounts: 5, dislikecounts: 6}
    ]
    let postElements = posts.map(p => <Post message={p.message} likecounts={p.likecounts} dislikecounts={p.dislikecounts} />);
    return (<div className={s.postsBlock}>
        <div>
            My posts
            <div>
                <div className={s.postsBlock}><textarea></textarea></div>
                <div className={s.postsBlock}>
                    <button>New Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    </div>);
}
export default MyPosts;