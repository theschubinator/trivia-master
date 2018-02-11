import React from 'react';
import { setGameCategory } from '../actions/game';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/game.css';

const GameOptions = (props) => {
	if(!props.user.loggedIn) return <Redirect to="/" />

	const handleClick = (e) => {
		const category = e.target.name
		props.setGameCategory(category)
		props.history.push("/newgame/start")
	}

	return (
		<div id="gameOptions">
			<label>Choose Category</label><br/>
			<Button name="All" onClick={handleClick}>All</Button>
			<Button name="Sports" onClick={handleClick}>Sports</Button>
			<Button name="History" onClick={handleClick}>History</Button>
			<Button name="Entertainment" onClick={handleClick}>Entertainment</Button>
			<Button name= "Science" onClick={handleClick}>Science</Button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		game: state.game
	}
}

export default connect(mapStateToProps, { setGameCategory })(GameOptions);