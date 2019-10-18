import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import updateList from './reducers';

const store = createStore(
  updateList,
  applyMiddleware(ReduxThunk)
);

export default store;
