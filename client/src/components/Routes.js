import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import PlayGame from '../containers/PlayGame';
import GameOptions from '../containers/GameOptions';
import UserProfile from '../containers/UserProfile';
import ShowQuestions from '../containers/ShowQuestions';
import ShowGame from '../components/ShowGame';
import { Home } from '../components/Home';

export const Routes = () => {
	return (
		<div className="container">
			<Route exact path='/' component={Home} />	
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={SignUp} />
			<Route exact path='/newgame' component={GameOptions} />
			<Route exact path='/newgame/start' component={PlayGame} />
			<Route exact path='/users/:id' component={UserProfile} />
			<Route exact path='/questions' component={ShowQuestions} />
			<Route exact path='/users/:id/games/:game_id' component={ShowGame} />
		</div>
	)
};