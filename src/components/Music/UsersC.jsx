import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import UserPhoto from '../../assets/images/8f160b5e9d954380c4b14b0f5ff4295ec9c141df_full.jpg';

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {

                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
<span>
    <div>
        <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={style.userPhoto} alt=""/>
    </div>
    <div>
        {u.followed
            ? <button onClick={() => {
                this.props.unfollow(u.id)
            }}>Unfollow</button>
            : <button onClick={() => {
                this.props.follow(u.id)
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
}

export default Users;