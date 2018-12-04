import {applyMiddleware, createStore, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import {fetchUserList} from '../modules/user/actions';
import rootReducer from '../reducers';


const enhancers = [
  applyMiddleware(ReduxThunk)
];

const store = createStore(
  rootReducer,
  {},
  compose(...enhancers)
);

store.dispatch(fetchUserList());

export default store;
