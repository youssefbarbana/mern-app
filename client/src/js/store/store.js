

import { rootReducer } from "../reducer/index";
import { applyMiddleware, compose, createStore  } from 'redux';
import thunk from 'redux-thunk'
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))