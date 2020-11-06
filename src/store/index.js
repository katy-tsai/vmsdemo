import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user.reducer';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeConfig = () => {
    const store = createStore(
        combineReducers({ user: userReducer }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return store;
};

export default storeConfig;