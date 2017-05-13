// http://stackoverflow.com/questions/3387427/remove-element-by-id
if (Element.prototype.remove === undefined) {
    Element.prototype.remove = function () {
        this.parentElement.removeChild(this);
    }
}


if (NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = Array.prototype.forEach
}



function registerSearch() {

    function displaySearch() {




    }


    document.getElementById('button-search').onclick = function () {
        displaySearch();
    };

}







window.addEventListener('DOMContentLoaded', function () {

    registerSearch();

});