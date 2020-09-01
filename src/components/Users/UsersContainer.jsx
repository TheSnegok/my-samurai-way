import React from 'react';
import { followSuccess,
	 unfollowSuccess, 
	 setCurrentPage,
	 getUsers,
	 follow,
	 unfollow } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChenged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize)
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
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

export default compose(
	connect(mapStateToProps, {
	followSuccess,
	unfollowSuccess,
	setCurrentPage,
	getUsers,
	follow,
	unfollow}),
	withAuthRedirect
)(UsersContainer);
