import React from 'react';
import style from './Users.module.css';
import UserPhoto from '../../assets/images/8f160b5e9d954380c4b14b0f5ff4295ec9c141df_full.jpg';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount/props.pageSize);

    let pages = [];
    for (let i=1; i<=pagesCount; i++){
        pages.push(i)
        if (i === 20) break;
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? style.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             } } key={p}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
<span>
    <div>
        <NavLink to={'/profile/' + u.id}>
            <img src={u.photos.small != null ? u.photos.small : UserPhoto}
                                               className={style.userPhoto} alt=''/>
        </NavLink>
    </div>
    <div>
        {u.followed
            ? <button onClick={() => {
                usersAPI.unfollow(u.id)
                    .then(data => {
                        if (data.resultCode === 0) {
                            props.unfollow(u.id)
                        }
                    });
            }}>Unfollow</button>
            : <button onClick={() => {
                usersAPI.follow(u.id)
                    .then(data => {
                        if (data.resultCode === 0) {
                            props.follow(u.id)
                        }
                    });
            }}>Follow</button>}
    </div>
</span>
                <span>
                <div>это имя - {u.name}</div>
                <div>Это статус - {u.status}</div>
            </span>
                <span>
                <div></div>
                <div></div>
            </span>
            </div>)
        }
    </div>
}

export default Users;