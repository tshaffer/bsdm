"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bsDmActions = require("../bsDmActions");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by tedshaffer on 10/5/16.
                                                                                                                                                                                                                   */


var _ = require('lodash/omit');

var createTransitionState = function createTransitionState(id, name, eventId, targetMediaStateId, transitionType, conditionId) {
    return {
        id: id,
        name: name,
        eventId: eventId,
        targetMediaStateId: targetMediaStateId,
        transitionType: transitionType,
        conditionId: conditionId
    };
};

var transitionsById = function transitionsById() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _ref = arguments[1];
    var type = _ref.type;
    var id = _ref.id;
    var payload = _ref.payload;

    switch (type) {
        case _bsDmActions.ADD_TRANSITION:
            var name = payload.name;
            var eventId = payload.eventId;
            var targetMediaStateId = payload.targetMediaStateId;
            var transitionType = payload.type;
            var conditionId = payload.conditionId;

            return Object.assign({}, state, _defineProperty({}, id, createTransitionState(id, name, eventId, targetMediaStateId, transitionType, conditionId)));
    }
    return state;
};

var transitionReducer = transitionsById;

exports.default = transitionReducer;