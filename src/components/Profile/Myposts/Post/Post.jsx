import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.post}>
			<div>
				<img src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" alt='ava' className={s.ava}/>
			</div>
			<div className={s.message}>
				{props.message}
			</div>
			<div className={s.likes}>
				{props.likescount}
			</div>
		</div>
	);
}

export default Post;