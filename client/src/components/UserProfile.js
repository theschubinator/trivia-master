import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const UserProfile = (props) => {
	if(!props.user.loggedIn) return <Redirect to="/" />

	return (
		<h1>{props.user.username}</h1>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser
	}
}

export default connect(mapStateToProps)(UserProfile)