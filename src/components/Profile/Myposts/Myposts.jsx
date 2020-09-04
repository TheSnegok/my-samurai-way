import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';
import { Field, Formik } from 'formik';
import { Textarea } from '../../common/FormsControl/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';

let FormMyPosts = (props) => {

	return (
		<Formik initialValues={{
				newPostText: ''
				}}
				onSubmit={(values) => {
					props.onSubmit(values);
				}}>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => (
					<form onSubmit={handleSubmit}>
						<div>
							<Field name='newPostText' component={Textarea} validate={[required, maxLengthCreator(10)]} placeholder={'Write new post...'}  onChange={handleChange} value={values.newPostText} />
						</div>
						<div>
							<button type="submit">Add post</button>
						</div>
					</form>
			)}
		 </Formik>

	)
}

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
			<FormMyPosts onSubmit={onAddPost} />
			<div>
				{postElement}
			</div>
		</div>
	);
}

export default Myposts;