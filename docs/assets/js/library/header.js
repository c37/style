/**
 *
 * Static Here - in Tue May 02 2017 11:40:14 GMT-0300 (BRT)
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
        global.header = mod.exports;
    }
})(this, function () {
    'use strict';

    // http://stackoverflow.com/questions/3387427/remove-element-by-id
    if (Element.prototype.remove === undefined) {
        Element.prototype.remove = function () {
            this.parentElement.removeChild(this);
        };
    }

    function registerHeaders() {

        var header = document.querySelector('header');

        console.log(header);

        // [].forEach.call(headers, function (header) {

        var itens = header.querySelectorAll('.container>ul>.hide-mobile');
        var navMobile = header.querySelector('.nav-mobile');

        console.log(itens);
        console.log(navMobile);

        navMobile.onclick = function () {

            // debugger

            if (!this.classList.contains('active')) {

                this.classList.add('active');

                document.body.style.overflow = 'hidden';

                document.getElementById('button-search').style.transition = 'all linear 0.2s !important';
                document.getElementById('button-search').style.opacity = 0;

                // debugger

                var hh = window.innerHeight + 99;
                var ww = window.innerWidth;

                // http://stackoverflow.com/questions/4917664/detect-viewport-orientation-if-orientation-is-portrait-display-alert-message-ad
                if (window.matchMedia("(orientation: portrait)").matches) {
                    // you're in PORTRAIT mode
                }

                if (window.matchMedia("(orientation: landscape)").matches) {
                    // you're in LANDSCAPE mode
                }

                var div = document.createElement('div');
                div.style.position = 'absolute';
                div.style.backgroundColor = 'white';
                div.style.boxSizing = 'border-box';
                div.style.height = hh + 'px';
                div.style.width = ww + 'px';
                div.style.zIndex = 3;
                div.style.paddingRight = '30px';
                div.style.paddingLeft = '30px';
                div.classList.add('header-mobile');

                var ul = document.createElement('ul');
                ul.classList.add('list');
                ul.classList.add('vertical');
                // ul.style.marginLeft = '40px';
                // ul.style.marginRight = '40px';

                [].forEach.call(itens, function (item) {

                    item.classList.remove('hide-mobile');

                    item.querySelector('a').style.display = 'block';

                    ul.appendChild(item);
                });

                div.appendChild(ul);

                header.appendChild(div);
            } else {

                this.classList.remove('active');

                document.body.style.overflow = 'initial';

                document.getElementById('button-search').style.opacity = .6;

                [].forEach.call(document.querySelectorAll('.header-mobile'), function (header) {
                    header.remove();
                });
            }
        };

        // });
    }

    window.addEventListener('DOMContentLoaded', function () {

        registerHeaders();
    });
});