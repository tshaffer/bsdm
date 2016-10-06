"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bsDmActions = require("../bsDmActions");

var createSignState = function createSignState(id, name, videoMode) {
    return {
        id: id,
        name: name,
        videoMode: videoMode
    };
}; /**
    * Created by tedshaffer on 10/5/16.
    */


var newSignState = createSignState("", "Untitled", "1920x1080x60p");

var signReducer = function signReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : newSignState;
    var _ref = arguments[1];
    var type = _ref.type;
    var id = _ref.id;
    var payload = _ref.payload;

    switch (type) {
        case _bsDmActions.NEW_SIGN:
            var name = payload.name;
            var videoMode = payload.videoMode;

            return createSignState(id, name, videoMode);
    }
    return state;
};

exports.default = signReducer;