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
						<img alt='ava' src={profile.photos.large || avatar} onClick={() => {}} />
						{isOwner && <input type={'file'} onChange={changeMainImage} placeholder='' />}
					</div>
					{editMode ? <Editmode profile={profile} getInfo={() => setEditMode(false)} setContacts={setContacts} /> :
					<div className={s.info}>
						{isOwner && <div><button className={s.editMode} onClick={() => (setEditMode(true))}><span>Edit</span></button></div>}
						<div className={s.infoBlock}><b>Name: </b>{profile.fullName}</div>
						<div className={s.infoBlock}><ProfileStatusWithHooks className={s.status} status={status} updateStatus={updateStatus} /></div>
						<div className={s.infoBlock}><b>About me: </b>{profile.aboutMe ? profile.aboutMe : 'No info'}</div>
						<div className={s.infoBlock}><b>Looking for job: </b> {profile.lookingForAJob ? 'true' : 'false'}</div>
						<div className={s.infoBlock}>
							{profile.lookingForAJob && <div><b>Looking for job descriptions: </b> {profile.lookingForAJobDescription ? profile.lookingForAJobDescription || 'true' : 'false'}</div>}
						</div>
						<Contacts profile={profile} />
					</div>}
				</div>
			</div>
		</div>
	);
}

export default ProfileInfo;