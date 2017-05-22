window.addEventListener('load', function () {

    // console.log(document.querySelectorAll("[data-clipboard-text]"));

    new Clipboard(document.querySelectorAll("[data-clipboard-text]"));

});