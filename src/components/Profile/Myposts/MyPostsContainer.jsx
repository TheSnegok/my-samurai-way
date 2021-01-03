import { addPostActionCreator } from '../../../redux/profileReducer';
import Myposts from './Myposts';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		mas: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Myposts);