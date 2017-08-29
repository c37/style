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

    if (navMenu === null || navMenu === undefined) {
        return;
    }


    var button = navMenu.querySelector('.show-mobile>li>i')

    if (button === null || button === undefined) {
        return;
    }


    // console.log(button);

    button.onclick = function () {

        if (document.getElementById('xxxx') === null) {

            // button.style.transform = 'translateX(0px) rotate( -180deg )';
            // button.style.transform = 'rotate(-180deg)';

            button.style.display = 'inline-block';
            button.style.position = 'relative';


            button.style.transform = 'scaleY(-1)';
            button.style.transition = 'transform 150ms';

            // button.classList.add('rotate-on');

            var menu = navMenu.querySelector('.hide-mobile').cloneNode(true);
            menu.classList.remove('hide-mobile');


            [].forEach.call(menu.querySelectorAll('li'), function (item) {

                item.addEventListener('click', function () {

                    console.log(this);

                    button.style.transform = 'scaleY(1)';
                    // button.style.transition = 'transform 150ms ease';

                    document.getElementById('xxxx').remove();

                });

            });


            menu.classList.add('list')
            menu.classList.add('vertical')

            var boundingRect = navMenu.getBoundingClientRect();
            var boundingRect22 = document.body.getBoundingClientRect();


            // console.log(boundingRect);


            let ww = window.innerWidth;

            var div = document.createElement('div');
            div.id = 'xxxx';
            div.style.position = 'absolute';
            div.style.backgroundColor = 'white';
            div.style.boxSizing = 'border-box';
            div.style.top = (boundingRect.bottom - 2) + 'px';
            div.style.left = '0px';
            div.style.borderBottom = '1px solid #c5c5c5';
            // div.style.width = ww + 'px';
            div.style.width = boundingRect22.width + 'px';
            div.style.zIndex = 3;

            div.style.padding = '30px';
            div.style.paddingTop = '10px';
            div.style.paddingBottom = '20px';

            // div.style.paddingRight = '30px';    
            // div.style.paddingLeft = '30px';

            div.appendChild(menu);

            navMenu.appendChild(div);

        } else {

            // button.style.transform = 'translateX(0px) rotate( -360deg )';
            // button.style.transform = 'rotate(-360deg)';

            button.style.transform = 'scaleY(1)';
            // button.style.transition = 'transform 150ms ease';

            document.getElementById('xxxx').remove();



        }


    }

}


window.addEventListener('DOMContentLoaded', function () {

    registerNavMenu();

});