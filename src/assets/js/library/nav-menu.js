// http://stackoverflow.com/questions/3387427/remove-element-by-id
if (Element.prototype.remove === undefined) {
    Element.prototype.remove = function () {
        this.parentElement.removeChild(this);
    }
}


function registerNavMenu() {


    // console.log(navMenu);
    // console.log(menu);
    var navMenu = document.querySelector('.nav-menu');

    var button = navMenu.querySelector('.show-mobile>li>i')

    // console.log(button);

    button.onclick = function () {

        if (document.getElementById('xxxx') === null) {

            button.style.transform = 'rotate( -180deg )';
            button.style.transition = 'transform 150ms ease';


            var menu = navMenu.querySelector('.hide-mobile').cloneNode(true);
            menu.classList.remove('hide-mobile');

            menu.classList.add('list')
            menu.classList.add('vertical')

            var boundingRect = navMenu.getBoundingClientRect();

            console.log(boundingRect);  


            let ww = window.innerWidth;

            var div = document.createElement('div');
            div.id = 'xxxx';
            div.style.position = 'absolute';
            div.style.backgroundColor = 'white';
            div.style.boxSizing = 'border-box';
            div.style.top = boundingRect.bottom + 'px';
            // div.style.width = ww + 'px';
            div.style.width = boundingRect.width + 'px';
            div.style.zIndex = 3;

            div.style.padding = '30px';    

            // div.style.paddingRight = '30px';    
            // div.style.paddingLeft = '30px';

            div.appendChild(menu);

            navMenu.appendChild(div);

        } else {

            button.style.transform = 'rotate( 0deg )';
            button.style.transition = 'transform 150ms ease';

            document.getElementById('xxxx').remove();



        }


    }

}


window.addEventListener('DOMContentLoaded', function () {

    registerNavMenu();

});