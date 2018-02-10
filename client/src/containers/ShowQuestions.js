import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionCard from '../components/QuestionCard';

const showQuestions = ({user, questions}) => {
	if(!user.loggedIn) return <Redirect to="/" />
  
  const permittedQuestions = () => {
		if (!user.admin) {
			let userQuestions = questions.filter(question => question.user.username === user.username)
			return userQuestions;
		} else {
			return questions
		}
	};

	const displayQuestions = permittedQuestions().map(question => {
		return (
			<div className="col-md-6">
				<QuestionCard question={question} />
			</div>
		)
	})

	return (
		<div className="row">
			<p id="questionNote"><b>Note: </b><i>Green signifies the correct answer.</i></p>
			{displayQuestions}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		questions: state.questions
	}
}

export default connect(mapStateToProps)(showQuestions);