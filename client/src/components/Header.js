import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/users';

const Header = (props) => {
	const handleSignOut = () => {
		props.signOut();
	}

	if(props.user.loggedIn) {
		return (
			<div>
				<Link to="/">Home</Link>
				<Link to={`users/${props.user.id}`}>Profile</Link>
				<Link to="/newgame">Start Game</Link>
				<Link to="/questions">View Questions</Link>
				<Link to="#" onClick={ handleSignOut }>Log Out</Link>
			</div>
		)
	} 
	else {
		return (
			<div>
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/signup">Sign Up</Link>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser
	}
}

export default connect(mapStateToProps, { signOut })(Header);