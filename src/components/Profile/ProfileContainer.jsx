import React from 'react';
import { connect } from 'react-redux';
import {useMatch} from 'react-router-dom';
import {getUserProfile, setUserProfile} from '../Redux/ProfileReducer';
import Profile from './Profile';
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 2;
      this.props.getUserProfile(userId);
        usersAPI.getProfile(userId)
            .then(({ data }) => {
            setUserProfile(data);
        });
    }

    render() {


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
});

export default compose(
 connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect)(ProfileURLMatch);


