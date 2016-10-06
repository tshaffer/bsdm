'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMediaStatesForZone = exports.getMediaStateById = undefined;

var _reselect = require('reselect');

var _bsDmActions = require('../bsDmActions');

var _bsDmClasses = require('../bsDmClasses');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by tedshaffer on 10/5/16.
                                                                                                                                                                                                                   */


var _ = require('lodash/omit');

var createMediaStateState = function createMediaStateState(id, name, container, contentItemState) {
    return {
        id: id,
        name: name,
        container: container,
        contentItemState: contentItemState
    };
};

var mediaStatesById = function mediaStatesById() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _ref = arguments[1];
    var type = _ref.type;
    var id = _ref.id;
    var payload = _ref.payload;

    switch (type) {
        case _bsDmActions.ADD_MEDIA_STATE:
            var name = payload.name;
            var container = payload.container;
            var contentItemState = payload.contentItemState;

            return Object.assign({}, state, _defineProperty({}, id, createMediaStateState(id, name, container, contentItemState)));
    }
    return state;
};

var mediaStateReducer = mediaStatesById;

exports.default = mediaStateReducer;

// Selectors

var getMediaStateById = exports.getMediaStateById = function getMediaStateById(state, props) {
    var mediaStateState = state.mediaStates[props.id];
    if (mediaStateState) {
        var mediaState = new _bsDmClasses.MediaState(mediaStateState);
        return mediaState;
    } else {
        return undefined;
    }
};

var getStatesById = function getStatesById(state) {
    return state.mediaStates;
};
var getZoneIdProp = function getZoneIdProp(state, props) {
    return props.id;
};

var getMediaStatesForZone = exports.getMediaStatesForZone = (0, _reselect.createSelector)(getStatesById, getZoneIdProp, function (states, zone) {
    return Object.keys(states).filter(function (id, index, idArray) {
        return states[id].container.id === zone;
    });
});
