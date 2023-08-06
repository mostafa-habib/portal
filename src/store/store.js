import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise'; // Import redux-promise
import rootReducer from './reducers';

const composeEnhancers = (
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const middleware = applyMiddleware(thunk, promise); // Use redux-promise

const store = createStore(rootReducer, composeEnhancers(middleware));

export default store;