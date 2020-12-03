import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user.reducer';
import devicesReducer from './reducers/devices.reducer';
import channelsReducer from './reducers/channels.reducer';
import groupsReducer from './reducers/groups.reducer';
import mapsReducer from './reducers/maps.reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeConfig = () => {
    const store = createStore(
        combineReducers(
            {
                user: userReducer,
                devices: devicesReducer,
                channels: channelsReducer,
                groups: groupsReducer,
                maps:mapsReducer,
            }),
        composeEnhancers(applyMiddleware(thunk)))

    return store;
};

export default storeConfig;