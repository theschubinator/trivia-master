import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { QuestionCard } from '../components/QuestionCard';

const showQuestions = (props) => {
	if(!props.user.loggedIn) return <Redirect to="/" />
	
	const showQuestion = props.questions.map(question => {
		return <QuestionCard question={question} />
	})

	return showQuestion
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		questions: state.questions
	}
}

export default connect(mapStateToProps)(showQuestions);