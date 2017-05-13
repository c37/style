/**
 *
 * Static Here - in Sat May 13 2017 12:53:12 GMT-0300 (BRT)
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
        global.search = mod.exports;
    }
})(this, function () {
    'use strict';

    // http://stackoverflow.com/questions/3387427/remove-element-by-id
    if (Element.prototype.remove === undefined) {
        Element.prototype.remove = function () {
            this.parentElement.removeChild(this);
        };
    }

    if (NodeList.prototype.forEach === undefined) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }

    function registerSearch() {

        function displaySearch() {}

        document.getElementById('button-search').onclick = function () {
            displaySearch();
        };
    }

    window.addEventListener('DOMContentLoaded', function () {

        registerSearch();
    });
});