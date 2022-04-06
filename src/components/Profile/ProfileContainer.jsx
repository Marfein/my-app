import React from 'react';
import { connect } from 'react-redux';
import {useMatch} from 'react-router-dom';
import {getStatus, getUserProfile, setUserProfile, updateStatus} from '../Redux/ProfileReducer';
import Profile from './Profile';
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 2;
      this.props.getUserProfile(userId);
      this.props.getStatus(userId)
          /*usersAPI.getProfile(userId)
            .then(({ data }) => {
                setUserProfile(data);
            });*/
    }

    render() {


        return (

            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
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
    status: state.profilePage.status
});

export default compose(
 connect(mapStateToProps, { getUserProfile,getStatus, updateStatus }),
    withAuthRedirect)(ProfileURLMatch);


