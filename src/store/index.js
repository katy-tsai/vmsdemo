import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user.reducer';
import devicesReducer from './reducers/devices.reducer';
import channelsReducer from './reducers/channels.reducer';
import groupsReducer from './reducers/groups.reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeConfig = () => {
    const store = createStore(
        combineReducers(
            {
                user: userReducer,
                devices: devicesReducer,
                channels: channelsReducer,
                groups: groupsReducer
            }),
        composeEnhancers(applyMiddleware(thunk)))

    return store;
};

export default storeConfig;