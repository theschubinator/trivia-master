import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UserStatistics from '../containers/UserStatistics';

const UserProfile = (props) => {
	if(!props.user.loggedIn) return <Redirect to="/" />

	return (
		<div>
			<h1>{props.user.username}</h1>
			<UserStatistics />
		</div>
		
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
	}
}

export default connect(mapStateToProps)(UserProfile)