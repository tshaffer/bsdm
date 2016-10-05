"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Zone = exports.MediaContentItem = exports.MediaObject = exports.ContentItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require("./utilities/utils");

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by tedshaffer on 10/5/16.
                                                                                                                                                           */


var ContentItem = exports.ContentItem = function ContentItem(name, type, id) {
    _classCallCheck(this, ContentItem);

    this.name = name;
    this.type = type;
    this.id = (0, _utils.guid)();
};

var MediaObject = exports.MediaObject = function () {
    function MediaObject(state) {
        _classCallCheck(this, MediaObject);

        this.path = state.path;
        this.mediaType = state.mediaType;
    }

    _createClass(MediaObject, [{
        key: "isEqual",
        value: function isEqual(other) {
            return this.path === other.path && this.mediaType === other.mediaType;
        }
    }, {
        key: "fileName",
        value: function fileName() {
            return ""; // TODO
        }
    }, {
        key: "isAvailable",
        value: function isAvailable() {
            return true; // TODO
        }
    }]);

    return MediaObject;
}();

var MediaContentItem = exports.MediaContentItem = function (_ContentItem) {
    _inherits(MediaContentItem, _ContentItem);

    function MediaContentItem(state) {
        _classCallCheck(this, MediaContentItem);

        var _this = _possibleConstructorReturn(this, (MediaContentItem.__proto__ || Object.getPrototypeOf(MediaContentItem)).call(this, state.name, "media", state.id));

        _this.media = new MediaObject(state.media);
        return _this;
    }

    return MediaContentItem;
}(ContentItem);

var Zone = exports.Zone = function () {
    _createClass(Zone, [{
        key: "containerObject",


        // id: BaDmId;
        // name: string;
        // type: ZoneType;
        // nonInteractive: boolean;
        // initialMediaStateId: BaDmId;

        get: function get() {
            return { id: this.id, type: "Zone" };
        }
    }]);

    function Zone(state) {
        _classCallCheck(this, Zone);

        this.id = state.id;
        this.name = state.name;
        this.type = state.type;
        this.nonInteractive = state.nonInteractive;
        this.initialMediaStateId = state.initialMediaStateId;
    }

    return Zone;
}();
