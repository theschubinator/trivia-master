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
		<div id ="gameOptions">

				<div className="row">
					<div className="col-md-6">
						<label>Choose Category</label><br/>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6 col-sm-12">
						<Button bsStyle="warning" name="All" onClick={handleClick}>All</Button>
						<Button bsStyle="warning" name="Sports" onClick={handleClick}>Sports</Button>
						<Button bsStyle="warning" name="History" onClick={handleClick}>History</Button>
						<Button bsStyle="warning" name="Entertainment" onClick={handleClick}>Entertainment</Button>
						<Button bsStyle="warning" name= "Science" onClick={handleClick}>Science</Button>	
					</div>
				</div>	

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