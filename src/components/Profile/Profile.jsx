import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (<div className={s.content}>
     <ProfileInfo />
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.newPostText}
                 dispatch={props.dispatch}/>
    </div>);
}
export default Profile;
