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
			<div id='NavBar'>
				<NavLink id="homeLink" style={{...styles, ...{marginLeft: '10px', fontSize: '20px'}}} to="/">Trivia Master</NavLink>
				<NavLink className="NavLink newGame" style={styles} to="/newgame">New Game</NavLink>
				<NavLink className="NavLink showQuestions" style={styles} to="/questions">View Questions</NavLink>
				<NavLink className="NavLink newQuestion" style={styles} to="/questions/new">Create Question</NavLink>
				<NavLink className="NavLink logOut" to="#" style={{...styles, ...{float: 'right', marginRight: '20px'}}} onClick={ handleSignOut }>Log Out</NavLink>
				<NavLink className="NavLink username" style={{...styles, ...{float: 'right'}}} to={`/users/${props.user.id}`}>{props.user.username}</NavLink>
			</div>
		)
	} 
	else {
		return (
			<div id='NavBar'>
				<NavLink id="homeLink" style={{...styles, ...{marginLeft: '10px', fontSize: '20px'}}} to="/">Trivia Master</NavLink>
				<NavLink className="NavLink Login" style={styles} to="/login">Login</NavLink>
				<NavLink className="NavLink SignUp" style={styles} to="/signup">Sign Up</NavLink>
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