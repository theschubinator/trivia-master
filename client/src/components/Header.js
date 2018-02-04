import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/users';

const Header = (props) => {
	const handleSignOut = () => {
		props.signOut();
	}

	const loggedInUser = (user) => {
		if(user.id !== "") {
			return (
				<div>
					<Link to="/">Home</Link>
					<Link to={`users/${user.id}`}>Profile</Link>
					<Link to="/playgame">Play Game</Link>
					<Link to="/questions">View Questions</Link>
					<Link to="#" onClick={ handleSignOut }>Log Out</Link>
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
			{ loggedOutUser(props.user) }
			{ loggedInUser(props.user) }
		</div>
	)
}


const mapStateToProps = (state) => {
	return {
		user: state.currentUser
	}
}

export default connect(mapStateToProps, { signOut })(Header);