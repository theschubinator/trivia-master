import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({user}) => {
	const loggedInUser = (user) => {
		if(user.id != "") {
			return (
				<div>
					<Link to="/">Home</Link>
					<Link to={`users/${user.id}`}>Profile</Link>
					<Link to="/playgame">Play Game</Link>
					<Link to="/questions">View Questions</Link>
					<Link to="#">Log Out</Link>
				</div>
			)
		}
	}

	const loggedOutUser = (user) => {
		if(user.id === "") {
			return (
				<div>
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
					<Link to="/signup">Sign Up</Link>
				</div>
			)
		}
	}

	return (
		<div>
			{ loggedOutUser(user) }
			{ loggedInUser(user) }
		</div>
	)
}


const mapStateToProps = (state) => {
	return {
		user: state.currentUser
	}
}

export default connect(mapStateToProps)(Header)