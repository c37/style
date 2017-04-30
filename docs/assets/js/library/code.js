/**
 *
 * Static Here - in Sun Apr 30 2017 20:22:11 GMT-0300 (BRT)
 *
 * c37-styleguide - styleguide of C37 - CNC
 * @version 0.0.1
 * @link http://styleguide.c37.co
 * @license CC BY-SA 4.0
 *
 */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["module"], factory);
    } else if (typeof exports !== "undefined") {
        factory(module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod);
        global.code = mod.exports;
    }
})(this, function (module) {
    "use strict";

    var sqrt = Math.sqrt;
    function square(x) {
        return x * x;
    }
    function diag(x, y) {
        return sqrt(square(x) + square(y));
    }
    module.exports = {
        sqrt: sqrt,
        square: square,
        diag: diag
    };
});