/**
 *
 * Static Here - in Tue May 09 2017 19:31:34 GMT-0300 (BRT)
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
        global.tab = mod.exports;
    }
})(this, function () {
    'use strict';

    (function (window) {
        'use strict';

        function registerTabs() {

            var tabs = document.querySelectorAll('.tab');

            // console.log(tabs);

            tabs.forEach(function (tab) {

                tab.setActive = setActive;

                // debugger;

                var headers = tab.querySelectorAll('.header>.item'),
                    bodys = tab.querySelectorAll('.body>.item');

                headers.forEach(function (header) {

                    header.onclick = function (e) {

                        e.stopPropagation();

                        var refSelected = header.dataset.ref;

                        // removo a class de item ativo para header
                        headers.forEach(function (header) {
                            if (header.dataset.ref === refSelected) {
                                header.classList.add('active');
                            } else {
                                header.classList.remove('active');
                            }
                        });
                        // removo a class de item ativo para header

                        // removo a class de item ativo para body
                        bodys.forEach(function (body) {
                            if (body.dataset.ref === refSelected) {
                                body.classList.add('active');
                            } else {
                                body.classList.remove('active');
                            }
                        });
                        // removo a class de item ativo para body

                        // para o evento do item escolhido
                        // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
                        var event = new CustomEvent('active', {
                            'detail': {
                                'type': this.dataset.ref,
                                'item': this
                            }
                        });

                        tab.dispatchEvent(event);
                    };
                });
            });
        }

        function setActive(ref) {

            var refSelected = ref;

            var headers = this.querySelectorAll('.header>.item'),
                bodys = this.querySelectorAll('.body>.item');

            // removo a class de item ativo para header
            headers.forEach(function (header) {
                if (header.dataset.ref === refSelected) {
                    header.classList.add('active');
                } else {
                    header.classList.remove('active');
                }
            });
            // removo a class de item ativo para header

            // removo a class de item ativo para body
            bodys.forEach(function (body) {
                if (body.dataset.ref === refSelected) {
                    body.classList.add('active');
                } else {
                    body.classList.remove('active');
                }
            });
            // removo a class de item ativo para body

            // para o evento do item escolhido
            // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
            var event = new CustomEvent('active', {
                'detail': {
                    'type': ref,
                    'item': this.querySelectorAll('.header>.item.active')
                }
            });

            this.dispatchEvent(event);
        }

        window.addEventListener('DOMContentLoaded', function () {

            registerTabs();
        });

        window.addEventListener('click', function () {});

        window.addEventListener('keydown', function (e) {});
    })(window);
});