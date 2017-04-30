/**
 *
 * Static Here - in Sat Apr 29 2017 21:01:19 GMT-0300 (BRT)
 *
 * c37-styleguide - styleguide of C37 - CNC
 * @version 0.0.1
 * @link http://styleguide.c37.co
 * @license CC BY-SA 4.0
 *
 */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'exports', 'b'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, exports, require('b'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports, global.b);
        global.modal = mod.exports;
    }
})(this, function (module, exports) {
    'use strict';

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    // http://dontkry.com/posts/code/browserify-and-the-universal-module-definition.html
    (function (root, factory) {
        if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
            // CommonJS
            module.exports = factory();
        } else if (typeof define === 'function' && define.amd) {
            // AMD
            define(['b'], function (b) {
                return root.returnExportsGlobal = factory(b);
            });
        } else {
            // Global Variables
            root.returnExportsGlobal = factory(root.b);
        }
    })(undefined, function (b) {

        // polyfill
        if (NodeList.prototype.forEach === undefined) {
            NodeList.prototype.forEach = Array.prototype.forEach;
        }
        // http://stackoverflow.com/questions/3387427/remove-element-by-id
        if (Element.prototype.remove === undefined) {
            Element.prototype.remove = function () {
                this.parentElement.removeChild(this);
            };
        }
        // polyfill


        // quando todo o load de window
        window.addEventListener('DOMContentLoaded', function () {

            var buttonsOpen = document.querySelectorAll("[data-modal-open*='modal-']");

            buttonsOpen.forEach(function (buttonOpen) {

                // debugger

                buttonOpen.onclick = function () {

                    var modal = document.getElementById(buttonOpen.dataset.modalOpen);

                    var div = document.createElement('div');
                    div.classList.add('overlay');

                    var modalClone = modal.cloneNode(true);
                    modalClone.style.display = 'block';
                    div.appendChild(modalClone);

                    document.body.appendChild(div);
                    // modal.style.display = 'block';


                    var buttonsClose = modalClone.querySelectorAll("[data-modal-close*='modal-']");

                    buttonsClose.forEach(function (buttonsClose) {

                        // debugger

                        buttonsClose.onclick = function () {

                            var overlay = document.querySelector('.overlay');

                            console.log(overlay);

                            overlay.remove();
                        };
                    });
                };
            });

            // console.log(modalsOpen)
        });

        return {};
    });
});