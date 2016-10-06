/**
 * Created by tedshaffer on 10/5/16.
 */
import { guid } from './utilities/utils';

// Actions
export const NEW_SIGN = 'NEW_SIGN';
export const ADD_ZONE = 'ADD_ZONE';
export const ADD_MEDIA_STATE = 'ADD_MEDIA_STATE';


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

export const baAddMediaState = (
        name,
        container,
        contentItemState,
        volume = 0) => ({
    type: ADD_MEDIA_STATE,
    id: guid(),
    payload: {
        name: name,
        container: container,
        contentItemState: contentItemState,
        volume: volume
    }
});
