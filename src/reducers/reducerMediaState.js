/**
 * Created by tedshaffer on 10/5/16.
 */
import { ADD_MEDIA_STATE } from '../bsDmActions';

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
