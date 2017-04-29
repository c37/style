// http://dontkry.com/posts/code/browserify-and-the-universal-module-definition.html
(function (root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('b'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['b'], function (b) {
            return (root.returnExportsGlobal = factory(b));
        });
    } else {
        // Global Variables
        root.returnExportsGlobal = factory(root.b);
    }
}(this, function (b) {

    // polyfill
    if (NodeList.prototype.forEach === undefined) {
        NodeList.prototype.forEach = Array.prototype.forEach
    }
    // http://stackoverflow.com/questions/3387427/remove-element-by-id
    if (Element.prototype.remove === undefined) {
        Element.prototype.remove = function () {
            this.parentElement.removeChild(this);
        }
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


                    }

                });



            }




        });








        // console.log(modalsOpen)

    });


    return {};
}));