import React from 'react';
import { CurrentGame } from './CurrentGame';
import { setGameCategory } from '../actions/game';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const GameOptions = (props) => {
	if(!props.user.loggedIn) return <Redirect to="/" />

	const handleClick = (e) => {
		const category = e.target.name
		props.setGameCategory(category)
		props.history.push("/newgame/start")
	}

	return (
		<div>
			<button name="All" onClick={handleClick}>All</button>
			<button name="Sports" onClick={handleClick}>Sports</button>
			<button name="History" onClick={handleClick}>History</button>
			<button name="Entertainment" onClick={handleClick}>Entertainment</button>
			<button name= "Science" onClick={handleClick}>Science</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser
	}
}

export default connect(mapStateToProps, {setGameCategory})(GameOptions);