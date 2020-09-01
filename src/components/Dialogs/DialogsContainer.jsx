import { addMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {
        addMessageActionCreator,
    }), withAuthRedirect)(Dialogs);