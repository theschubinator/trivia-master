import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/users';

const NavBar = (props) => {
	const handleSignOut = () => {
		props.signOut();
	}

	if(props.user.loggedIn) {
		return (
			<div id='header'>
				<Link id="homeLink" to="/">Trivia Master</Link>
				<Link className="NavLink" to={`users/${props.user.id}`}>Profile</Link>
				<Link className="NavLink" to="/questions">View Questions</Link>
				<Link className="NavLink" to="/newgame">New Game</Link>
				<Link id="logout" className="NavLink" to="#" onClick={ handleSignOut }>Log Out</Link>
			</div>
		)
	} 
	else {
		return (
			<div id='header'>
				<Link id="homeLink" to="/">Trivia Master</Link>
				<Link className="NavLink" to="/login">Login</Link>
				<Link className="NavLink" to="/signup">Sign Up</Link>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser
	}
}

export default connect(mapStateToProps, { signOut })(NavBar);