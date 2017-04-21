/**
 *
 * Static Here - in Fri Apr 21 2017 02:13:15 GMT-0300 (BRT)
 *
 * c37-styleguide - styleguide of C37 - CNC
 * @version 0.0.1
 * @link http://styleguide.c37.co
 * @license CC BY-SA 4.0
 *
 */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['moment', 'utility'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('moment'), require('utility'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.moment, global.utility);
    global.application = mod.exports;
  }
})(this, function (moment, utility) {
  'use strict';

  console.log(window);
  console.log(utility.square(7));
  console.log(moment().format('LLLL'));

  window.onload = function () {

    console.log('Hi!!');
  };
});