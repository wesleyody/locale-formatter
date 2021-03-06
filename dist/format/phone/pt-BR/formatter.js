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

    if (cleanValue.length > 4 && cleanValue.length < 9) {
        return cleanValue.substring(0, 4) + "-" + cleanValue.substring(4);
    } else if (cleanValue.length > 4 && cleanValue.length < 10) {
        return cleanValue.substring(0, 5) + "-" + cleanValue.substring(5);
    } else if (cleanValue.length === 10) {
        return "(" + cleanValue.substring(0, 2) + ") " + cleanValue.substring(2, 6) + "-" + cleanValue.substring(6);
    } else if (cleanValue.length === 11) {
        return "(" + cleanValue.substring(0, 2) + ") " + cleanValue.substring(2, 7) + "-" + cleanValue.substring(7);
    } else if (cleanValue.length === 13) {
        return "+" + cleanValue.substring(0, 2) + " (" + cleanValue.substring(2, 4) + ") " + cleanValue.substring(4, 9) + "-" + cleanValue.substring(9);
    } else {
        return cleanValue;
    }
};

exports.default = format;