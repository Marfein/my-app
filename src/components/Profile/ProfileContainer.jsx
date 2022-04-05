import React from 'react';
import { connect } from 'react-redux';
import {useMatch} from 'react-router-dom';
import { getUserProfile } from '../Redux/ProfileReducer';
import Profile from './Profile';
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/AuthRedirect";

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

let authRedirectComponent= withAuthRedirect(ProfileURLMatch);

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { getUserProfile })(authRedirectComponent);