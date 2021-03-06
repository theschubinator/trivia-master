import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionCard from '../components/QuestionCard';
import { Button } from 'react-bootstrap';

class ShowQuestions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: 'All'
		}
	}
	
	handleClick = (e) => {
		this.setState({ category: e.target.name})
	};

	render() {
		if(!this.props.user.loggedIn) return <Redirect to="/" />

		const permittedQuestions = () => {
			if (!this.props.user.admin) {
				let userQuestions = this.props.questions.filter(question => question.user.username === this.props.user.username)
				return filteredQuestionsByCategory(userQuestions);
			} 
			return filteredQuestionsByCategory(this.props.questions)
		};

		const filteredQuestionsByCategory = (questions) => {
			if(this.state.category !== 'All') {
				return questions.filter(question => question.category.name === this.state.category)
			}
			return questions
		};

		const displayQuestions = permittedQuestions().map((question, i) => {
			return (
				<div className="col-md-6 col-sm-12" key={i}>
					<QuestionCard question={question} />
				</div>
			)
		})

		const displayNoQuestionAlert = (
			<div id="NoQuestionsAlert">
				<h1>You have not yet created any questions!</h1>
				<p>Click <Link to="/questions/new">here</Link> to create your first question!</p>
			</div>
		)

		return (
			<div id='show-questions'>
				<div className="row">
					<div className="col-md-6 col-sm-12" id="showQuestionsBtn">
						<Button bsStyle="success" className="sortCategoriesBtn" name="All" onClick={this.handleClick}>All</Button>
						<Button bsStyle="success" className="sortCategoriesBtn" name="Sports" onClick={this.handleClick}>Sports</Button>	
						<Button bsStyle="success" className="sortCategoriesBtn" name="History" onClick={this.handleClick}>History</Button>
						<Button bsStyle="success" className="sortCategoriesBtn" name="Science" onClick={this.handleClick}>Science</Button>
						<Button bsStyle="success" className="sortCategoriesBtn" name="Entertainment" onClick={this.handleClick}>Entertainment</Button>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6 col-sm-12" id="quesitonNote">
						<p><b>Note: </b><i>Green signifies the correct answer.</i></p>
					</div>
				</div>

				<div className="row" id="showQuestions">
					{(displayQuestions.length > 0) ? displayQuestions : displayNoQuestionAlert}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		questions: state.questions
	}
}

export default connect(mapStateToProps)(ShowQuestions);