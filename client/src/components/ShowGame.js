import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loadQuestion } from '../actions/game';
import { OldGameQuestionCard } from './OldGameQuestionCard';

const ShowGame = ({user, oldGame}) => {
	if(!user.loggedIn) return <Redirect to="/" />
		
	const showGameQuestions = oldGame.questions.map((question, i) => {
		return <div className="col-md-6 col-sm-12"><OldGameQuestionCard key={i} question={question} /></div>
	})

	return (
		<div className="row">
			{showGameQuestions}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		oldGame: state.oldGame
	}
}

export default connect(mapStateToProps, {loadQuestion })(ShowGame);