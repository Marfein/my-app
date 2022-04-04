import React from 'react';
import { connect } from 'react-redux';
import {Navigate, useMatch} from 'react-router-dom';
import { getUserProfile } from '../Redux/ProfileReducer';
import Profile from './Profile';
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 2;
      this.props.getUserProfile(userId);
        usersAPI.getProfile(userId)
            .then(({ data }) => {
            this.props.setUserProfile(data);
        });
    }

    render() {
        if (!this.props.isAuth) return <Navigate to ="/Login" /> ;

        return (

            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match} />;
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
});

export default connect(mapStateToProps, { getUserProfile })(ProfileURLMatch);