/**
 *
 * Static Here - in Thu May 11 2017 01:45:09 GMT-0300 (BRT)
 *
 * c37-styleguide - styleguide of C37 - CNC
 * @version 0.0.1
 * @link http://styleguide.c37.co
 * @license CC BY-SA 4.0
 *
 */
// var ContactForm = (function () {
//     var s;

//     return {
//         settings: {
//             inputs: $("#contact_form input"),
//             submitBtn: $(".js-contact_form-submit")
//         },

//         init: function() {
//             s = this.settings;
//             this.bindUIActions();
//         },

//         actions: function () {
//             s.submitBtn.on("click", function() {
//                 if (!ContactForm.validate()) {
//                     // If it doesn't validate, show some errors
//                 }
//             });

//         },

//         validate: function (s.inputs) {
//             inputs.each(function() {
//                 // Do some validation here.
//             }
//         }


//     };
// })();
// ContactForm.init();

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
        global.form = mod.exports;
    }
})(this, function () {
    "use strict";
});