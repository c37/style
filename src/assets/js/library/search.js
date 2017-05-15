// http://stackoverflow.com/questions/3387427/remove-element-by-id
if (Element.prototype.remove === undefined) {
    Element.prototype.remove = function () {
        this.parentElement.removeChild(this);
    }
}

if (NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = Array.prototype.forEach
}


function searchRegister() {

    function searchOpen() {

        var div = document.createElement('div');
        div.classList.add('overlay');

        document.body.appendChild(div);

        document.querySelector('header>.search').classList.remove('hide');

    }


    function searchClose() {

        document.querySelector('.overlay').remove();
        document.querySelector('header>.search').classList.add('hide');

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