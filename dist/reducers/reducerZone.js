'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getZoneById = undefined;

var _redux = require('redux');

var _bsDmActions = require('../bsDmActions');

var _bsDmClasses = require('../bsDmClasses');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by tedshaffer on 10/5/16.
                                                                                                                                                                                                                   */


var _ = require('lodash/omit');

var createZoneState = function createZoneState(id, name, type, nonInteractive) {
    return {
        id: id,
        name: name,
        type: type,
        nonInteractive: nonInteractive,
        initialMediaStateId: id
    };
};

var zonesById = function zonesById() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];


    var type = action.type;
    var id = action.id;
    var payload = action.payload;

    console.log("zonesById invoked, type=", type);
    switch (type) {
        case _bsDmActions.ADD_ZONE:
            console.log("add_zone");
            var zoneName = payload.name;
            var zoneType = payload.type;
            var nonInteractive = payload.nonInteractive;

            return Object.assign({}, state, _defineProperty({}, id, createZoneState(id, zoneName, zoneType, nonInteractive)));
    }
    return state;
};

var allZones = function allZones() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var _ref = arguments[1];
    var type = _ref.type;
    var id = _ref.id;

    switch (type) {
        case _bsDmActions.ADD_ZONE:
            return [].concat(_toConsumableArray(state), [id]);
    }
    return state;
};

var zoneReducer = (0, _redux.combineReducers)({ zonesById: zonesById, allZones: allZones });

exports.default = zoneReducer;

// Selectors

var getZoneById = exports.getZoneById = function getZoneById(state, props) {
    var zoneState = state.zones.zonesById[props.id];

    if (zoneState) {
        var zone = new _bsDmClasses.Zone(zoneState);
        return zone;
    } else {
        return undefined;
    }
};
