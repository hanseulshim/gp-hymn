import { combineReducers } from 'redux';
import { dataReducer, hymnReducer } from './reducers';

const rootReducer = combineReducers({
  dataReducer,
  hymnReducer,
});

export default rootReducer;
