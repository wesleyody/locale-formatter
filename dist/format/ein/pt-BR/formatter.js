"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var format = exports.format = function format(value) {
    if (!value) {
        return "";
    }

    var cleanValue = value.replace(/[^0-9]+/g, "");

    if (cleanValue.length > 2 && cleanValue.length <= 5) {
        return cleanValue.substring(0, 2) + "." + cleanValue.substring(2);
    } else if (cleanValue.length > 5 && cleanValue.length <= 8) {
        return cleanValue.substring(0, 2) + "." + cleanValue.substring(2, 5) + "." + cleanValue.substring(5);
    } else if (cleanValue.length > 8 && cleanValue.length <= 12) {
        return cleanValue.substring(0, 2) + "." + cleanValue.substring(2, 5) + "." + cleanValue.substring(5, 8) + "/" + cleanValue.substring(8);
    } else if (cleanValue.length > 12 && cleanValue.length <= 14) {
        return cleanValue.substring(0, 2) + "." + cleanValue.substring(2, 5) + "." + cleanValue.substring(5, 8) + "/" + cleanValue.substring(8, 12) + "-" + cleanValue.substring(12);
    } else {
        return cleanValue;
    }
};

exports.default = format;