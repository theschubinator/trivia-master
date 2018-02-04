import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loggedIn } from '../helpers/users';

class PlayGame extends Component {


	render () {
		const { user } = this.props
		if(!user.loggedIn) return <Redirect to="/" />
			
		return (
			<h1>Game Page</h1>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser
	}
}

export default connect(mapStateToProps)(PlayGame);