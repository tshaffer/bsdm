'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bsDmActions = require('../bsDmActions');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by tedshaffer on 10/5/16.
                                                                                                                                                                                                                   */


var _ = require('lodash/omit');

var createEventState = function createEventState(id, name, type, mediaStateId, data) {
    return {
        id: id,
        name: name,
        type: type,
        mediaStateId: mediaStateId,
        data: data
    };
};

var eventsById = function eventsById() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _ref = arguments[1];
    var type = _ref.type;
    var id = _ref.id;
    var payload = _ref.payload;

    switch (_type) {
        case _bsDmActions.ADD_EVENT:
            var name = payload.name;
            var _type = payload.type;
            var mediaStateId = payload.mediaStateId;
            var data = payload.data;

            return Object.assign({}, state, _defineProperty({}, id, createEventState(id, name, _type, mediaStateId, data)));
    }
    return state;
};

var eventReducer = eventsById;

exports.default = eventReducer;