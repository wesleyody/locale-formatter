"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var format = exports.format = function format(value) {
    if (!value) {
        return "";
    }

    // Limpa o valor
    var cleanValue = value.replace(/[^0-9]+/g, "");

    if (cleanValue.length > 3 && cleanValue.length <= 6) {
        return cleanValue.substring(0, 3) + "." + cleanValue.substring(3);
    } else if (cleanValue.length > 6 && cleanValue.length <= 9) {
        return cleanValue.substring(0, 3) + "." + cleanValue.substring(3, 6) + "." + cleanValue.substring(6);
    } else if (cleanValue.length === 11) {
        return cleanValue.substring(0, 3) + "." + cleanValue.substring(3, 6) + "." + cleanValue.substring(6, 9) + "-" + cleanValue.substring(9);
    } else {
        return cleanValue;
    }
};

exports.default = format;