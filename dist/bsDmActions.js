'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.baAddTransition = exports.baAddEvent = exports.baAddMediaState = exports.baAddZone = exports.baNewSign = exports.ADD_TRANSITION = exports.ADD_EVENT = exports.UPDATE_ZONE = exports.ADD_MEDIA_STATE = exports.ADD_ZONE = exports.NEW_SIGN = undefined;
exports.baUpdateZone = baUpdateZone;

var _utils = require('./utilities/utils');

var _reducerMediaState = require('./reducers/reducerMediaState');

// Actions
/**
 * Created by tedshaffer on 10/5/16.
 */
var NEW_SIGN = exports.NEW_SIGN = 'NEW_SIGN';
var ADD_ZONE = exports.ADD_ZONE = 'ADD_ZONE';
var ADD_MEDIA_STATE = exports.ADD_MEDIA_STATE = 'ADD_MEDIA_STATE';
var UPDATE_ZONE = exports.UPDATE_ZONE = 'UPDATE_ZONE';
var ADD_EVENT = exports.ADD_EVENT = 'ADD_EVENT';
var ADD_TRANSITION = exports.ADD_TRANSITION = 'ADD_TRANSITION';

var baNewSign = exports.baNewSign = function baNewSign(name, mode) {
    return {
        type: NEW_SIGN,
        id: (0, _utils.guid)(),
        payload: {
            name: name,
            videoMode: mode
        }
    };
};

var baAddZone = exports.baAddZone = function baAddZone(name, type) {
    var nonInteractive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return {
        type: ADD_ZONE,
        id: (0, _utils.guid)(),
        payload: {
            name: name,
            type: type,
            nonInteractive: nonInteractive
        }
    };
};

function baUpdateZone(id, params) {
    return function (dispatch, getState, ex) {
        // If the update parameters include an update initialMediaStateId, make sure that the ID
        //  actually refers to a media state in the given zone. If not, do not proceed with the update.
        // TODO: if update fails, return an error (probably best achieved by returning a Promise.)
        var doUpdate = true;
        if (params.initialMediaStateId) {
            var mediaStates = (0, _reducerMediaState.getMediaStatesForZone)(getState(), { id: id });
            doUpdate = mediaStates.indexOf(params.initialMediaStateId) >= 0;
        }
        if (doUpdate) {
            dispatch({ type: UPDATE_ZONE, id: id, payload: params });
        } else {
            console.log("ERROR!! - invalid initial media state");
        }
    };
}

var baAddMediaState = exports.baAddMediaState = function baAddMediaState(name, container, contentItemState) {
    var volume = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    return {
        type: ADD_MEDIA_STATE,
        id: (0, _utils.guid)(),
        payload: {
            name: name,
            container: container,
            contentItemState: contentItemState,
            volume: volume
        }
    };
};

var baAddEvent = exports.baAddEvent = function baAddEvent(name, type, mediaState, data) {
    return {
        type: ADD_EVENT,
        id: (0, _utils.guid)(),
        payload: {
            name: name,
            type: type,
            mediaStateId: mediaState,
            data: data
        }
    };
};

var baAddTransition = exports.baAddTransition = function baAddTransition(name, eventId, targetMediaStateId) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "No_effect";
    var conditionId = arguments[4];
    return {
        type: ADD_TRANSITION,
        id: (0, _utils.guid)(),
        payload: {
            name: name,
            eventId: eventId,
            targetMediaStateId: targetMediaStateId,
            type: type,
            conditionId: conditionId
        }
    };
};