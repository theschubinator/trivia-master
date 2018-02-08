import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../actions/users';
import TopUser from './TopUser';
import { Button, Well } from 'react-bootstrap';

class LeaderBoard extends Component {
	constructor() {
		super();
		this.state = {
			category: 'total'
		}
	}

	componentDidMount() {
		this.props.loadUsers()
	}

	handleClick = (e) => {
		const category = e.target.name
		this.setState({
			category: category
		})
	}

	render () {
		const { users } = this.props
		const category = this.state.category[0].toUpperCase() + this.state.category.slice(1)
		const showLeaderBoard = (category='total', u=users) => {
			const stats = findUsersStats(users)
			const topUsers = statsByCategory(category, stats)
			return topUsers.map((user, i) => {
				return <TopUser key={i} user={user} category={category} index={i} />
			})
		}

		return (
			<div className='leaderBoard'>
				<h1><b>LeaderBoard</b></h1>
				<h4><b>Category</b></h4>
				<h5>{category}</h5>
				<Button bsSize="xsmall" bsStyle="success" name='total' onClick={this.handleClick}>All</Button>
				<Button bsSize="xsmall" bsStyle="success" name='sports' onClick={this.handleClick}>Sports</Button>
				<Button bsSize="xsmall" bsStyle="success" name='history' onClick={this.handleClick}>History</Button>
				<Button bsSize="xsmall" bsStyle="success" name='science' onClick={this.handleClick}>Science</Button>
				<Button bsSize="xsmall" bsStyle="success" name='entertainment' onClick={this.handleClick}>Entertainment</Button>
				<Well className="leaderScores">
					{showLeaderBoard(this.state.category)}
				</Well>
			</div>
		)
	}
}

const mapStatetoProps = (state) => {
	return {
		users: state.users
	}
}

const findUsersStats = (users) => {
	let usersStats = []
	for(let i=0; i < users.length; i++) {
		const total = Math.round((users[i].total_correct/(users[i].games_played * 10) * 100) || 0)
		const entertainment = Math.round((users[i].entertainment_correct/users[i].entertainment_played) * 100) || 0
		const sports = Math.round((users[i].sports_correct/users[i].sports_played) * 100) || 0
		const science = Math.round((users[i].science_correct/users[i].science_played) * 100) || 0
		const history = Math.round((users[i].history_correct/users[i].history_played) * 100) || 0
		usersStats = usersStats.concat({ username: users[i].username, total, entertainment, sports, science, history })
	}
	return usersStats
}

const statsByCategory = (category, stats) => {
	switch(category) {
		case 'total':
			return stats.sort((a,b) => b.total - a.total)
		case 'sports':
			return stats.sort((a,b) => b.sports - a.sports)
		case 'history':
			return stats.sort((a,b) => b.history - a.history)
		case 'entertainment':
			return stats.sort((a,b) => b.entertainment - a.entertainment)
		case 'science':
			return stats.sort((a,b) => b.science - a.science)
		default:
			break
	}
}

export default connect(mapStatetoProps, { loadUsers })(LeaderBoard);