/**
 * Created by tedshaffer on 10/5/16.
 */
import {combineReducers} from 'redux';
import signReducer from './reducerSign';
import zoneReducer from './reducerZone';
import mediaStateReducer from './reducerMediaState';

const bsdmReducer = combineReducers({
    sign: signReducer,
    zones: zoneReducer,
    mediaStates: mediaStateReducer
});

export default bsdmReducer;
