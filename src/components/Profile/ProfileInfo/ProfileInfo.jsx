import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWIthHooks';
import avatar from '../../../assets/images/avatar.svg';
import Contacts from './Contacts/Contacts';
import Editmode from './Editmode/Editmode'

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto, setContacts }) => {

	const changeMainImage = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}

	if (!profile) {
		return (
			<Preloader />
		);
	}

	const [editMode, setEditMode] = useState(false);

	return (
		<div className={s.profileinfo}>
			<div className={s.descriptionBlock}>
				<div className={s.mainInfo}>
					<div className={s.profileImage}>
						<img alt='ava' src={profile.photos.large || avatar} />
						{isOwner && <input type={'file'} onChange={changeMainImage} />}
					</div>
					{editMode ? <Editmode profile={profile} getInfo={() => setEditMode(false)} setContacts={setContacts} /> :
					<div className={s.info}>
						<div><b>Name: </b>{profile.fullName}</div>
						<div><ProfileStatusWithHooks className={s.status} status={status} updateStatus={updateStatus} /></div>
						<div><b>About me: </b>{profile.aboutMe ? profile.aboutMe : 'No info'}</div>
						<div><b>Looking for job: </b> {profile.lookingForAJob ? 'true' : 'false'}</div>
						<div>
							{profile.lookingForAJob && <div><b>Looking for job descriptions: </b> {profile.lookingForAJobDescription ? profile.lookingForAJobDescription || 'true' : 'false'}</div>}
							{isOwner && <div><button onClick={() => (setEditMode(true))}>Edit</button></div>}
							<Contacts profile={profile} />
						</div>
					</div>}
				</div>
			</div>
		</div>
	);
}

export default ProfileInfo;