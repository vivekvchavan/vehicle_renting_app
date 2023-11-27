import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {vehicleReducer} from './reducers/vehicleReducer';

const composeEnhancers = composeWithDevTools({
  
});

const rootReducer = combineReducers({
    vehicleReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;