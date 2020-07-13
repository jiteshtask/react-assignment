import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import { userReducer } from './reducer';

const createStoreMiddleware= applyMiddleware(ReduxThunk)(createStore);
export const userStore= createStoreMiddleware(userReducer);