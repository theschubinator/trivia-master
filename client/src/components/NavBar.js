import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/users';

const NavBar = (props) => {
	const handleSignOut = () => {
		props.signOut();
	}

	const styles = {
		color: 'white',
		float: 'left',
		textAlign: 'center',
		padding: '13px',
		textDecoration: 'none',
		fontSize: '17px'
	}

	if(props.user.loggedIn) {
		return (
			<div id='header'>
				<NavLink id="homeLink" style={styles} to="/">Trivia Master</NavLink>
				<NavLink className="NavLink" style={styles} to={`users/${props.user.id}`}>Profile</NavLink>
				<NavLink className="NavLink" style={styles} to="/questions">View Questions</NavLink>
				<NavLink className="NavLink" style={styles} to="/newgame">New Game</NavLink>
				<NavLink className="NavLink" to="#" style={{...styles, ...{float: 'right'}}} onClick={ handleSignOut }>Log Out</NavLink>
			</div>
		)
	} 
	else {
		return (
			<div id='header'>
				<NavLink style={{...styles, ...{fontSize:'30px', padding: '5px'}}} to="/">Trivia Master</NavLink>
				<NavLink className="NavLink" style={styles} to="/login">Login</NavLink>
				<NavLink className="NavLink" style={styles} to="/signup">Sign Up</NavLink>
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