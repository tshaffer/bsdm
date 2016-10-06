/**
 * Created by tedshaffer on 10/5/16.
 */
import { guid } from './utilities/utils';

import { getMediaStatesForZone } from './reducers/reducerMediaState';

// Actions
export const NEW_SIGN = 'NEW_SIGN';
export const ADD_ZONE = 'ADD_ZONE';
export const ADD_MEDIA_STATE = 'ADD_MEDIA_STATE';
export const UPDATE_ZONE = 'UPDATE_ZONE';


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

export function baUpdateZone(id, params) {
    return (dispatch, getState, ex) =>
    {
        // If the update parameters include an update initialMediaStateId, make sure that the ID
        //  actually refers to a media state in the given zone. If not, do not proceed with the update.
        // TODO: if update fails, return an error (probably best achieved by returning a Promise.)
        let doUpdate = true;
        if (params.initialMediaStateId) {
            let mediaStates = getMediaStatesForZone(getState(), {id: id});
            doUpdate = mediaStates.indexOf(params.initialMediaStateId) >= 0;
        }
        if (doUpdate) {
            dispatch({type: UPDATE_ZONE, id: id, payload: params});
        } else {
            console.log("ERROR!! - invalid initial media state");
        }
    };
}

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
