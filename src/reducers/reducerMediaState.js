/**
 * Created by tedshaffer on 10/5/16.
 */
import { createSelector } from 'reselect';

import { ADD_MEDIA_STATE } from '../bsDmActions';
import { MediaState } from '../bsDmClasses';

let _ = require('lodash/omit');

const createMediaStateState =
    (id, name, container, contentItemState) =>
        ({
            id: id,
            name: name,
            container: container,
            contentItemState: contentItemState
        });

const mediaStatesById = (state = {}, {type, id, payload}) => {
    switch (type) {
        case ADD_MEDIA_STATE :
            let {name, container, contentItemState} = payload;
            return Object.assign({}, state, {[id]: createMediaStateState(id, name, container, contentItemState)});
    }
    return state;
};

const mediaStateReducer = mediaStatesById;

export default mediaStateReducer;

// Selectors

export const getMediaStateById = (state, props) => {
    let mediaStateState = state.mediaStates[props.id];
    if (mediaStateState) {
        const mediaState = new MediaState(mediaStateState);
        return mediaState;
    }
    else {
        return undefined;
    }
}

const getStatesById = (state) => state.mediaStates;
const getZoneIdProp = (state, props) => (props.id);

export const getMediaStatesForZone = createSelector(getStatesById, getZoneIdProp,
    (states, zone) => {
            return Object.keys(states).filter((id, index, idArray) => states[id].container.id === zone);
    }
);

