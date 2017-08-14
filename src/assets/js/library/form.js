// http://stackoverflow.com/questions/3387427/remove-element-by-id
if (Element.prototype.remove === undefined) {
    Element.prototype.remove = function () {
        this.parentElement.removeChild(this);
    }
}

if (NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = Array.prototype.forEach
}


// quando todo o load de window
// window.addEventListener('load', function () {
window.addEventListener('DOMContentLoaded', function () {

        var forms = document.querySelectorAll('form[data-validate="true"]');


        [].forEach.call(forms, function (form) {

                var groups = form.querySelectorAll('.group');

                console.log(groups);


        });        

        // console.log(forms);


});







// https://github.com/Mevrael/bunny
// https://github.com/ansman/validate.js
// https://github.com/rickharrison/validate.js

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