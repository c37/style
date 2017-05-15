/**
 *
 * Static Here - in Mon May 15 2017 16:56:54 GMT-0300 (BRT)
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

    function searchRegister() {

        function searchOpen() {

            var div = document.createElement('div');
            div.classList.add('overlay');

            document.body.appendChild(div);

            document.querySelectorAll('header>.search .list.vertical>li').forEach(function (item) {
                item.classList.remove('hide-mobile');
            });

            document.querySelector('header>.search').classList.remove('hide');
        }

        function searchClose() {
            document.querySelector('.overlay').remove();
            document.querySelector('header>.search').classList.add('hide');

            document.querySelectorAll('header>.search .list.vertical>li').forEach(function (item) {
                item.classList.add('hide-mobile');
            });
        }

        function searchInput() {

            var textSearchTerm = document.getElementById('text-search-term');
        }

        document.getElementById('button-search-open').onclick = function () {
            searchOpen();
        };

        document.getElementById('button-search-close').onclick = function () {
            searchClose();
        };
    }

    window.addEventListener('DOMContentLoaded', function () {

        searchRegister();
    });
});