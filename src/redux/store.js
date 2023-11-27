import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {vehicleReducer} from './reducers/vehicleReducer';
import {alertsReducer} from './reducers/alertsReducer';

const composeEnhancers = composeWithDevTools({
  
});

const rootReducer = combineReducers({
    vehicleReducer,
    alertsReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;