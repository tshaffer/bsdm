/**
 * Created by tedshaffer on 10/5/16.
 */
import {combineReducers} from 'redux';
import signReducer from './reducerSign';

const bsdmReducer = combineReducers({
    sign: signReducer
});

export default bsdmReducer;
