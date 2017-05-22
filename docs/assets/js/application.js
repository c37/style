/**
 *
 * C37 Style - in Mon May 22 2017 01:06:20 GMT-0300 (E. South America Standard Time)
 *
 * c37-styleguide - styleguide of C37 - CNC
 * @version 0.0.1
 * @link http://styleguide.c37.co
 * @license CC BY-SA 4.0
 *
 */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.application = mod.exports;
  }
})(this, function () {
  "use strict";
});