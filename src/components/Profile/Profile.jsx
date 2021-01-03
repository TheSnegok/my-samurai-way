import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MyPostsContainer';
import MainHeader from '../common/MainHeader/MainHeader';

const Profile = (props) => {
	return (
		<div className={s.profile}>
			<MainHeader text='Profile' />
			<ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} setContacts={props.setContacts} />
			<MyPostsContainer />
		</div>
	);
}

export default Profile;