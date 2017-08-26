"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _formatter = require("./pt-BR/formatter");

var _formatter2 = _interopRequireDefault(_formatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factory = function factory(locale) {
    switch (locale) {
        case "pt-BR":
            return _formatter2.default;
        default:
            return null;
    }
};

var formatter = function formatter(locale) {
    return factory(locale);
};
exports.default = formatter;