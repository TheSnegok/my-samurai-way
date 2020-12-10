import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, setContacts } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userid;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }
    
    componentDidUpdate(prevProps) {
        if(this.props.match.params.userid !== prevProps.match.params.userid){
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props} 
                        savePhoto={this.props.savePhoto}
                        isOwner={!this.props.match.params.userid}
                        profile={this.props.profile} 
                        status={this.props.status} 
                        updateStatus={this.props.updateStatus}
                        setContacts={this.props.setContacts} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, setContacts }),
    withRouter)(ProfileContainer);