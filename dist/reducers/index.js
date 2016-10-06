'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducerSign = require('./reducerSign');

var _reducerSign2 = _interopRequireDefault(_reducerSign);

var _reducerZone = require('./reducerZone');

var _reducerZone2 = _interopRequireDefault(_reducerZone);

var _reducerMediaState = require('./reducerMediaState');

var _reducerMediaState2 = _interopRequireDefault(_reducerMediaState);

var _reducerTransition = require('./reducerTransition');

var _reducerTransition2 = _interopRequireDefault(_reducerTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bsdmReducer = (0, _redux.combineReducers)({
    sign: _reducerSign2.default,
    zones: _reducerZone2.default,
    mediaStates: _reducerMediaState2.default,
    transitions: _reducerTransition2.default
}); /**
     * Created by tedshaffer on 10/5/16.
     */
exports.default = bsdmReducer;
