'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.baAddZone = exports.baNewSign = exports.ADD_ZONE = exports.NEW_SIGN = undefined;

var _utils = require('./utilities/utils');

// Actions
var NEW_SIGN = exports.NEW_SIGN = 'NEW_SIGN'; /**
                                               * Created by tedshaffer on 10/5/16.
                                               */
var ADD_ZONE = exports.ADD_ZONE = 'ADD_ZONE';

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
