/**
 *
 * Static Here - in Tue May 02 2017 11:14:13 GMT-0300 (BRT)
 *
 * c37-styleguide - styleguide of C37 - CNC
 * @version 0.0.1
 * @link http://styleguide.c37.co
 * @license CC BY-SA 4.0
 *
 */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['code-2', 'code-1'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('code-2'), require('code-1'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.code2, global.code1);
    global.application = mod.exports;
  }
})(this, function (_code, utility) {
  'use strict';

  var _code2 = _interopRequireDefault(_code);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var edgar = new _code2.default('Edgar');
  console.log(edgar.doWork());

  console.log(window);
  console.log(utility.square(7));
  console.log((0, _code.work)('Andrea'));

  window.onload = function () {

    console.log('Hi!!');
  };
});