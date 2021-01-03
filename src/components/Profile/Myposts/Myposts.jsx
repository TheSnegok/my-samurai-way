import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';
import { Field, Form, Formik } from 'formik';
import { Textarea } from '../../common/FormsControl/FormsControls';

let FormMyPosts = (props) => {

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
					return errors;
				}}
				onSubmit={(values, actions) => {
					props.onSubmit(values.newPostText);
					actions.resetForm();
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
						<Field onChange={handleChange} 
								onBlur={handleBlur}
								name='newPostText'
								component={Textarea} 
								placeholder={'Write new post...'} 
								value={values.newPostText}
								errors={errors.errorText}
								touched={touched} />
						<div>
							<button type="submit">Add post</button>
						</div>
					</Form>
			)}
		 </Formik>
	)
}


const Myposts = React.memo((props) => {
	console.log('Render');
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
});

export default Myposts;