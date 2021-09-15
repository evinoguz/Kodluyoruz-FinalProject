import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {user} from './reducers/user';

const combinedReducers = combineReducers({
  user,
});

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;
export * from './actions';
export const getState = s => store.getState()[s];