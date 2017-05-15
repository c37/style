/**
 *
 * Static Here - in Mon May 15 2017 16:43:27 GMT-0300 (BRT)
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
        global.collapse = mod.exports;
    }
})(this, function () {
    'use strict';

    (function (window) {
        'use strict';

        if (NodeList.prototype.forEach === undefined) {
            NodeList.prototype.forEach = Array.prototype.forEach;
        }

        function registerCollapse() {

            var collapses = document.querySelectorAll('.collapse');

            // console.log(tabs);

            collapses.forEach(function (collapse) {

                // para o set do valor
                collapse.setSelected = setSelected;

                collapse.querySelectorAll('.header').forEach(function (item) {

                    item.onclick = function (e) {

                        var target = '';

                        collapse.querySelectorAll('.header').forEach(function (item) {

                            if (item.classList.contains('selected')) {
                                target = item.dataset.body;
                            }

                            item.classList.remove('selected');
                            document.getElementById(item.dataset.body).classList.add('hide');
                        });

                        if (target !== this.dataset.body) {
                            this.classList.add('selected');
                            document.getElementById(this.dataset.body).classList.remove('hide');
                        }
                    };
                });
            });
        }

        function setSelected(target) {

            var collapse = this;

            collapse.querySelectorAll('.header').forEach(function (item) {

                item.classList.remove('selected');
                document.getElementById(item.dataset.body).classList.add('hide');

                if (target === item.dataset.body) {
                    item.classList.add('selected');
                    document.getElementById(item.dataset.body).classList.remove('hide');
                }
            });
        }

        window.addEventListener('load', function () {

            registerCollapse();
        });

        window.addEventListener('click', function () {});

        window.addEventListener('keydown', function (e) {});
    })(window);
});