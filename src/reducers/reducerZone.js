/**
 * Created by tedshaffer on 10/5/16.
 */
import { combineReducers } from 'redux';

import { ADD_ZONE } from '../bsDmActions';

let _ = require('lodash/omit');

const createZoneState =
    (id, name, type, nonInteractive) =>
        ({
            id: id,
            name: name,
            type: type,
            nonInteractive: nonInteractive,
            initialMediaStateId: id
        });

const zonesById = (state = {}, action ) => {

    const type = action.type;
    const id = action.id;
    const payload = action.payload;

    console.log("zonesById invoked, type=", type);
    switch (type) {
        case ADD_ZONE :
            console.log("add_zone");
            let {name: zoneName, type: zoneType, nonInteractive} = payload;
            return Object.assign({}, state, {[id]: createZoneState(id, zoneName, zoneType, nonInteractive)});
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
