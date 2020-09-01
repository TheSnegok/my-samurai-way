import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import notLookingAJob from '../../../assets/images/notLookingAJob.jpg';
import lookingForAJob from '../../../assets/images/lookingForAJob.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {

	if(!props.profile) {
		return(
			<Preloader />
		);
	}   

	return (
		<div className={s.profileinfo}>
			{/* <div>
				<img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt='ava' />
			</div> */}
			<div className={s.descriptionBlock}>
				<img alt='ava' src={ props.profile.photos.large ? props.profile.photos.large : 'https://newsterra.net/upload/catalog/ru/o-chem-govorit-avatarka-profilya-obyasnyayut-psihologi_5ef1a814b8d06.jpg'}/>
				<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
				{props.profile.lookingForAJob 
				? <img className={s.lookJob} alt='lookJob' src={lookingForAJob}/>
				: <img alt='NotlookJob' src={notLookingAJob} />
			}
				ava + description
   			 </div>
		</div>
	);
}

export default ProfileInfo;