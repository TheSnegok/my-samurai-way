import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';
import { Field, Form, Formik } from 'formik';
import { Textarea } from '../../common/FormsControl/FormsControls';
// import { required, maxLengthCreator } from '../../../utils/validators/validators';

let FormMyPosts = (props) => {

	// const maxLengthCreator10 = maxLengthCreator(5);

	return (
		<Formik initialValues={{
				newPostText: ''
				}}
				validate={(values) => {
					let errors = {};
					if(!values.newPostText) {
						errors.errorText = 'Values is null';
					}
					if (values.newPostText.length > 5) {
						errors.errorText = `Max length is 5`;
					}
					// errors.errorText = required(values);
					// if(!errors.errorText) {
					// 	errors.errorText = maxLengthCreator10(values);
					// }
					return errors;
				}}
				onSubmit={(values) => {
					props.onSubmit(values.newPostText);
				}}
				>
			{({
				values,
				handleChange,
				handleBlur,
				errors,
				touched
			}) => (
					<Form>
						<div>
							<Field name='newPostText'
							component={Textarea} 
							placeholder={'Write new post...'} 
							onChange={handleChange} 
							onBlur={handleBlur}
							value={values.newPostText}
							errors={errors.errorText}
							touched={touched.newPostText} />
						</div>
						<div>
							<button type="submit">Add post</button>
						</div>
					</Form>
			)}
		 </Formik>
	)
}

const Myposts = (props) => {
	let postElement = props.mas.map(post => <Post key={post.id} message={post.text} likescount={post.likescount} />);

	let onAddPost = (values) => {
		props.addPost(values);
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