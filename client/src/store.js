import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { currentUserReducer } from './reducers/currentUserReducer';
import { userFormDataReducer } from './reducers/userFormDataReducer';

const reducers = combineReducers({
	currentUser: currentUserReducer,
	formData: userFormDataReducer
})

export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
)