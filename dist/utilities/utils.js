'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.guid = guid;
/**
 * Created by tedshaffer on 10/5/16.
 */
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}