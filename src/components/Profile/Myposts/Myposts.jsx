import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../common/FormsControl/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';

let FormMyPosts = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name='newPostText' component={Textarea} validate={[required, maxLengthCreator(10)]} placeholder={'Write new post...'} />
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

let ReduxMyPosts = reduxForm({form: 'myNewPost'})(FormMyPosts);

const Myposts = (props) => {
	let postElement = props.mas.map(post => <Post key={post.id} message={post.text} likescount={post.likescount} />);

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}

	return (
		<div className={s.myposts}>
			My posts
			<div>
				New post
     		</div>
			<ReduxMyPosts onSubmit={onAddPost} />
			<div>
				{postElement}
			</div>
		</div>
	);
}

export default Myposts;