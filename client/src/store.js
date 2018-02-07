import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { currentUserReducer } from './reducers/currentUserReducer';
import { userFormDataReducer } from './reducers/userFormDataReducer';
import { questionsReducer } from './reducers/questionsReducer';
import { gameReducer } from './reducers/gameReducer';
import { currentUserGamesReducer } from './reducers/currentUserGamesReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { userGameReducer } from './reducers/userGameReducer';

const reducers = combineReducers({
	currentUser: currentUserReducer,
	userGames: currentUserGamesReducer,
	formData: userFormDataReducer,
	questions: questionsReducer,
	oldGame: userGameReducer,
	categories: categoriesReducer,
	game: gameReducer
})

export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
)