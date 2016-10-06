/**
 * Created by tedshaffer on 10/5/16.
 */
import { ADD_TRANSITION } from "../bsDmActions";

var _ = require('lodash/omit');

const createTransitionState =
    (id, name, eventId, targetMediaStateId, transitionType, conditionId) =>
        ({
            id: id,
            name: name,
            eventId: eventId,
            targetMediaStateId: targetMediaStateId,
            transitionType: transitionType,
            conditionId: conditionId
        });

const transitionsById = (state = {}, {type, id, payload} ) => {
    switch (type) {
        case ADD_TRANSITION :
            let {name, eventId, targetMediaStateId, type : transitionType, conditionId} = payload;
            return Object.assign({}, state, {[id]: createTransitionState(id, name, eventId, targetMediaStateId, transitionType, conditionId)});
    }
    return state;
};

const transitionReducer = transitionsById;

export default transitionReducer;

