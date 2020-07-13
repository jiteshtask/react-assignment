import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


export const userReducer= combineReducers({
  form: formReducer // donot change the name of the properties
});