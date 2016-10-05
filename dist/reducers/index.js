'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducerSign = require('./reducerSign');

var _reducerSign2 = _interopRequireDefault(_reducerSign);

var _reducerZone = require('./reducerZone');

var _reducerZone2 = _interopRequireDefault(_reducerZone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bsdmReducer = (0, _redux.combineReducers)({
  sign: _reducerSign2.default,
  zones: _reducerZone2.default
}); /**
     * Created by tedshaffer on 10/5/16.
     */
exports.default = bsdmReducer;
