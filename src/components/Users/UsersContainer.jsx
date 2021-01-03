import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';
import {
	follow, followSuccess,

	setCurrentPage, requestUsers,

	unfollow, unfollowSuccess
} from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
const Users = React.lazy(() => import('./Users'));

class UsersContainer extends React.Component {

	componentDidMount() {
		const {currentPage, pageSize} = this.props;
		this.props.getUsers(currentPage, pageSize);
	}

	onPageChenged = (pageNumber) => {
		const {pageSize} = this.props;
		this.props.getUsers(pageNumber, pageSize)
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChenged={this.onPageChenged}
				users={this.props.users}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				followingInProgress={this.props.followingInProgress}/>
		</>	
	}
}

const mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default compose(
	connect(mapStateToProps, {
	followSuccess,
	unfollowSuccess,
	setCurrentPage,
	follow,
	unfollow,
	getUsers: requestUsers}),
)(UsersContainer);
