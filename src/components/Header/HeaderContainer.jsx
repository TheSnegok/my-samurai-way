import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthMe, logout } from '../../redux/authReducer';
import Preloader from '../common/Preloader/Preloader';

class HeaderComponent extends React.Component {

    componentDidMount() {
        this.props.getAuthMe();
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Header {...this.props}/>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default connect(mapStateToProps, { getAuthMe, logout })(HeaderComponent);