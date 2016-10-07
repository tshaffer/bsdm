/**
 * Created by tedshaffer on 10/5/16.
 */
import { combineReducers } from 'redux';

import { ADD_ZONE, UPDATE_ZONE, ADD_MEDIA_STATE } from '../bsDmActions';
import { Zone } from '../bsDmClasses';

let _ = require('lodash/omit');

const createZoneState =
    (id, name, type, nonInteractive) =>
        ({
            id: id,
            name: name,
            type: type,
            nonInteractive: nonInteractive,
            initialMediaStateId: ""
        });

const zonesById = (state = {}, action ) => {

    const type = action.type;
    const id = action.id;
    const payload = action.payload;

    switch (type) {
        case ADD_ZONE :
            let {name: zoneName, type: zoneType, nonInteractive} = payload;
            return Object.assign({}, state, {[id]: createZoneState(id, zoneName, zoneType, nonInteractive)});
        case UPDATE_ZONE :
            let updatedZone = Object.assign({}, state[id], payload);
            return Object.assign({}, state, {[id]: updatedZone});
        case ADD_MEDIA_STATE :
            // First media state added to a zone always becomes the initial state
            // For this action, action.id == mediaStateId, mediaState.container.id == ZoneId
            let {container} = payload;
            let zone = state[container.id];
            if (zone && zone.initialMediaStateId === "") {
                let updatedZone = Object.assign({}, state[container.id], {initialMediaStateId: id});
                return Object.assign({}, state, {[container.id]: updatedZone});
            }
            break;
    }
    return state;
};

const allZones = (state = [], {type, id} ) => {
    switch (type) {
        case ADD_ZONE :
            return [...state, id];
    }
    return state;
};

const zoneReducer = combineReducers( {zonesById, allZones} );

export default zoneReducer;

// Selectors

export const getZoneById = (state, props) => {
    let zoneState = state.zones.zonesById[props.id];

    if (zoneState) {
        const zone = new Zone(zoneState);
        return zone;
    }
    else {
        return undefined;
    }
}

