import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import UserPhoto from '../../assets/images/8f160b5e9d954380c4b14b0f5ff4295ec9c141df_full.jpg';

let Users = (props) => {
    let getUsers= () =>{
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
            props.setUsers(response.data.items);
        });
    }
    }
    return <div>
        <button onClick={getUsers}> Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
<span>
    <div>
        <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={style.userPhoto} alt=""/>
    </div>
    <div>
        {u.followed
            ? <button onClick={() => {
                props.unfollow(u.id)
            }}>Unfollow</button>
            : <button onClick={() => {
                props.follow(u.id)
            }}>Follow</button>}

    </div>
</span>
                <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
                <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
            </div>)
        }
    </div>
}
export default Users;