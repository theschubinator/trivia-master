import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const showQuestions = (props) => {
	if(!props.user.loggedIn) return <Redirect to="/" />

	return <h1>Show Questions</h1>
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser
	}
}

export default connect(mapStateToProps)(showQuestions);