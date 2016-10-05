/**
 * Created by tedshaffer on 10/5/16.
 */
import { guid } from './utilities/utils';

// Actions
export const NEW_SIGN = 'NEW_SIGN';
export const ADD_ZONE = 'ADD_ZONE';


export const baNewSign = (name, mode) => ({
    type: NEW_SIGN,
    id: guid(),
    payload: {
        name: name,
        videoMode: mode
    }
});


export const baAddZone = (name, type, nonInteractive = true) => ({
    type: ADD_ZONE,
    id: guid(),
    payload: {
        name: name,
        type: type,
        nonInteractive: nonInteractive
    }
});

