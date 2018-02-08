import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../actions/users';

class LeaderBoard extends Component {
	componentDidMount() {
		this.props.loadUsers()
	}

	render () {
		return (
			<h1>LeaderBoard</h1>
		)
	}
}

const mapStatetoProps = (state) => {
	return {
		// users: state.users
	}
}

export default connect(mapStatetoProps, { loadUsers })(LeaderBoard);