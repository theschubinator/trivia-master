import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loadQuestion } from '../actions/game';
import { OldGameQuestionCard } from './OldGameQuestionCard';

const ShowGame = ({user, oldGame}) => {
	if(!user.loggedIn) return <Redirect to="/" />
		
	const showGameQuestions = oldGame.questions.map((question, i) => {
		return <OldGameQuestionCard key={i} question={question} />
	})

	return (
		<div>
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