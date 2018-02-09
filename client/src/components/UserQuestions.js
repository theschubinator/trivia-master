import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { findQuestionsById } from '../helpers/questions';

const UserQuestions = ({user, questions}) => {
	// const showQuestions = user.questions.map(question => {
	// 	return <p><Link to={`/users/${user.id}/questions/${question.id}`}>{question.question}</Link></p>
	// })
	findQuestionsById(user.questions, questions)
	return (
		<div>
			<h1>questions here</h1>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		questions: state.questions
	}
}

export default connect(mapStateToProps)(UserQuestions);