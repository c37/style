/**
 *
 * Static Here - in Wed Apr 26 2017 18:41:38 GMT-0300 (BRT)
 *
 * c37-styleguide - styleguide of C37 - CNC
 * @version 0.0.1
 * @link http://styleguide.c37.co
 * @license CC BY-SA 4.0
 *
 */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['button', 'option'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('button'), require('option'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.button, global.option);
    global.application = mod.exports;
  }
})(this, function (_button, utility) {
  'use strict';

  var _button2 = _interopRequireDefault(_button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var edgar = new _button2.default('Edgar');
  console.log(edgar.doWork());

  console.log(window);
  console.log(utility.square(7));
  console.log((0, _button.work)('Andrea'));

  window.onload = function () {

    console.log('Hi!!');
  };
});