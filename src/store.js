import { createStore } from 'redux';
import mainReducer from './reducers/mainReducer';

const rootReducer = mainReducer

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);