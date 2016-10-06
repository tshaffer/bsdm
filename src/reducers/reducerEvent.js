/**
 * Created by tedshaffer on 10/5/16.
 */
import { ADD_EVENT } from '../bsDmActions';

var _ = require('lodash/omit');

const createEventState =
    (id, name, type, mediaStateId, data) =>
        ({
            id: id,
            name: name,
            type: type,
            mediaStateId: mediaStateId,
            data: data
        });

const eventsById = (state = {}, {type, id, payload} ) => {
    switch (type) {
        case ADD_EVENT :
            let {name, type, mediaStateId, data} = payload;
            return Object.assign({}, state, {[id]: createEventState(id, name, type, mediaStateId, data)});
    }
    return state;
};

const eventReducer = eventsById;

export default eventReducer;

