/**
 *
 * C37 Style Html - in Wed Sep 06 2017 15:25:25 GMT-0300 (E. South America Standard Time)
 *
 * @c37/style-html - Style in Html of C37
 * @version 2.1.7
 * @link http://style-html.c37.co
 * @license CC-BY-SA-4.0
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
        global.library = mod.exports;
    }
})(this, function (module, exports) {
    'use strict';

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    (function (window) {

        // quando todo o load de window
        window.addEventListener('DOMContentLoaded', function () {

            var checkboxs = document.querySelectorAll('div.button.checkbox');

            [].forEach.call(checkboxs, function (checkbox) {

                // os buttons do componente
                var buttons = checkbox.querySelectorAll('button'),
                    oldValue = checkbox.dataset.selected;

                [].forEach.call(buttons, function (button) {

                    // o load do componente
                    if (checkbox.dataset.selected === button.dataset.value) {
                        // add ao button a class de selecionado
                        button.classList.add('selected');
                    }

                    // o evento click para cada button do componente
                    button.onclick = function () {
                        // se este button não está selecionado e não está disabled
                        if (!this.classList.contains('selected') && !this.classList.contains('disabled')) {
                            // para todos os buttons deste meu componente
                            var buttons = this.parentNode.querySelectorAll('button');

                            // removo a class de seleção
                            [].forEach.call(buttons, function (button) {
                                button.classList.remove('selected');
                            });

                            // add ao button que estou a class de selecionado
                            this.classList.add('selected');
                            // informo ao componente o valor do button selecionado
                            this.parentNode.dataset.selected = this.dataset.value;
                        }
                    };
                });

                // para o watch do 'EVENTO' de mudança
                setInterval(function () {
                    // o valor inicial vs o valor do momento atual
                    if (oldValue !== checkbox.dataset.selected) {

                        oldValue = checkbox.dataset.selected;

                        // para os buttons do componente
                        [].forEach.call(buttons, function (button) {
                            // removo a class de seleção
                            button.classList.remove('selected');
                            // marco o selecionado
                            if (oldValue === button.dataset.value) {
                                // add ao button a class de selecionado
                                button.classList.add('selected');
                            }
                        });
                    }
                }, 10);
            });
        });
    })(window);
    (function (window) {
        'use strict';

        if (NodeList.prototype.forEach === undefined) {
            NodeList.prototype.forEach = Array.prototype.forEach;
        }

        function registerCollapse() {

            var collapses = document.querySelectorAll('.collapse');

            // console.log(tabs);

            collapses.forEach(function (collapse) {

                // para o set do valor
                collapse.setSelected = setSelected;

                collapse.querySelectorAll('.header').forEach(function (item) {

                    item.onclick = function (e) {

                        var target = '';

                        collapse.querySelectorAll('.header').forEach(function (item) {

                            if (item.classList.contains('selected')) {
                                target = item.dataset.body;
                            }

                            item.classList.remove('selected');
                            document.getElementById(item.dataset.body).classList.add('hide');
                        });

                        if (target !== this.dataset.body) {
                            this.classList.add('selected');
                            document.getElementById(this.dataset.body).classList.remove('hide');
                        }
                    };
                });
            });
        }

        function setSelected(target) {

            var collapse = this;

            collapse.querySelectorAll('.header').forEach(function (item) {

                item.classList.remove('selected');
                document.getElementById(item.dataset.body).classList.add('hide');

                if (target === item.dataset.body) {
                    item.classList.add('selected');
                    document.getElementById(item.dataset.body).classList.remove('hide');
                }
            });
        }

        window.addEventListener('load', function () {

            registerCollapse();
        });

        window.addEventListener('click', function () {});

        window.addEventListener('keydown', function (e) {});
    })(window);
    // http://stackoverflow.com/questions/3387427/remove-element-by-id
    if (Element.prototype.remove === undefined) {
        Element.prototype.remove = function () {
            this.parentElement.removeChild(this);
        };
    }

    if (NodeList.prototype.forEach === undefined) {
        NodeList.prototype.forEach = Array.prototype.forEach;
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
    // http://stackoverflow.com/questions/3387427/remove-element-by-id
    if (Element.prototype.remove === undefined) {
        Element.prototype.remove = function () {
            this.parentElement.removeChild(this);
        };
    }

    if (NodeList.prototype.forEach === undefined) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }

    function headerRegister() {

        var header = document.querySelector('header');

        if (header === null || header === undefined) {
            return;
        }

        var itens = header.querySelectorAll('.website>.container>ul>.hide-mobile'),
            navMobile = header.querySelector('.nav-mobile');

        navMobile.onclick = function () {

            // debugger

            if (!this.classList.contains('active')) {

                this.classList.add('active');

                document.body.style.overflow = 'hidden';

                document.getElementById('button-search-open').style.transition = 'all linear 0.2s !important';
                document.getElementById('button-search-open').style.opacity = 0;

                // debugger

                var hh = window.innerHeight + 99;
                var ww = window.innerWidth;

                // http://stackoverflow.com/questions/4917664/detect-viewport-orientation-if-orientation-is-portrait-display-alert-message-ad
                if (window.matchMedia("(orientation: portrait)").matches) {
                    // you're in PORTRAIT mode
                }

                if (window.matchMedia("(orientation: landscape)").matches) {
                    // you're in LANDSCAPE mode
                }

                var div = document.createElement('div');
                div.style.position = 'absolute';
                div.style.backgroundColor = 'white';
                div.style.boxSizing = 'border-box';
                div.style.height = hh + 'px';
                div.style.top = '47px';
                div.style.width = ww + 'px';
                div.style.zIndex = 7;
                div.style.paddingRight = '30px';
                div.style.paddingLeft = '30px';
                div.classList.add('header-mobile');

                var ul = document.createElement('ul');
                ul.classList.add('list');
                ul.classList.add('vertical');
                // ul.style.marginLeft = '40px';
                // ul.style.marginRight = '40px';

                [].forEach.call(itens, function (item) {

                    item.classList.remove('hide-mobile');

                    item.querySelector('a').style.display = 'block';

                    ul.appendChild(item);
                });

                div.appendChild(ul);

                header.appendChild(div);
            } else {

                this.classList.remove('active');

                document.body.style.overflow = 'initial';

                document.getElementById('button-search-open').style.opacity = .6;

                [].forEach.call(document.querySelectorAll('.header-mobile'), function (header) {
                    header.remove();
                });
            }
        };
    }

    function searchRegister() {

        function searchOpen() {

            var div = document.createElement('div');
            div.classList.add('overlay');

            document.body.appendChild(div);

            document.querySelectorAll('header>.search .list.vertical>li').forEach(function (item) {
                item.classList.remove('hide-mobile');
            });

            document.querySelector('header>.search').classList.remove('hide');
        }

        function searchClose() {
            document.querySelector('.overlay').remove();
            document.querySelector('header>.search').classList.add('hide');

            document.querySelectorAll('header>.search .list.vertical>li').forEach(function (item) {
                item.classList.add('hide-mobile');
            });
        }

        function searchInput() {

            var textSearchTerm = document.getElementById('text-search-term');
        }

        if (document.getElementById('button-search-open') && document.getElementById('button-search-close')) {

            document.getElementById('button-search-open').onclick = function () {
                searchOpen();
            };

            document.getElementById('button-search-close').onclick = function () {
                searchClose();
            };
        }
    }

    window.addEventListener('DOMContentLoaded', function () {

        headerRegister();
        searchRegister();
    });
    (function (root) {
        'use strict';

        // http://www.ebrueggeman.com/skinnytip
        // https://github.com/elliottb/skinnytip


        // estudar para melhorias
        // https://github.com/tlindig/position-calculator
        // https://github.com/FezVrasta/popper.js

        var Hint = Hint || {
            divId: 'hint-layer',
            mouseX: null,
            mouseY: null,
            zIndexLayer: 9999999999,
            text: null,
            title: null,
            xOffset: 15,
            yOffset: 15
        };

        Hint.reset = function () {
            this.xOffset = 10;
            this.yOffset = 30;
            this.backColor = '#E5F6FE';
            this.borderColor = '#ADD9ED';
            this.textColor = '#5E99BD';
            this.titleTextColor = '#5E99BD';
            this.width = '200px';
            this.border = '1px';
            this.titlePadding = '5px';
            this.textPadding = '5px';
            this.fontFace = 'lucida grande, tahoma, verdana, arial, sans-serif';
            this.fontSize = '11px';
            this.titleFontSize = '11px';
            this.layer = null;
            this.zIndex = 0;
            this.visible = false;
        };

        Hint.init = function () {

            // debugger;

            var targets = document.querySelectorAll(".hint");

            // console.log(targets);

            var targetCount = targets.length;
            for (var i = 0; i < targetCount; i++) {
                // targets[i].addEventListener('mouseover', function () {
                targets[i].addEventListener('mouseenter', function () {
                    var title, text, options;

                    // debugger

                    if (this.hasAttribute('data-hint-title')) {
                        title = this.getAttribute('data-hint-title');
                    }
                    if (this.hasAttribute('data-hint-text')) {
                        text = this.getAttribute('data-hint-text');
                    }
                    if (this.hasAttribute('data-hint-options')) {
                        options = this.getAttribute('data-hint-options');
                    }

                    // debugger
                    // console.log('mouseenter');

                    Hint.tooltip(text, title, options, this);
                });
                targets[i].addEventListener('mouseleave', function () {
                    Hint.hideTip();
                    // console.log('mouseleave');
                });
            }
            targets = null;
            this.captureMouse();
        };

        Hint.to = function (el) {

            // targets[i].addEventListener('mouseover', function () {
            el.addEventListener('mouseenter', function () {

                // debugger


                var title, text, options;
                if (this.hasAttribute('data-hint-title')) {
                    title = this.getAttribute('data-hint-title');
                }
                if (this.hasAttribute('data-hint-text')) {
                    text = this.getAttribute('data-hint-text');
                }
                if (this.hasAttribute('data-hint-options')) {
                    options = this.getAttribute('data-hint-options');
                }

                // debugger
                // console.log('mouseenter');

                Hint.tooltip(text, title, options, this);
            });
            el.addEventListener('mouseleave', function () {
                Hint.hideTip();
                // console.log('mouseleave');
            });
        };

        Hint.tooltip = function (text, title, options, el) {
            if (!text & !title) {
                return false;
            }
            //Reset variables for this tool tip
            this.reset();
            this.title = title;
            this.text = text;

            if (!(this.layer = self.document.getElementById(this.divId))) {
                var div = document.createElement("div");
                div.id = this.divId;
                div.style.visibility = "hidden";
                div.style['z-index'] = "99999999";
                div.style.position = "absolute";
                document.body.appendChild(div);
                this.layer = div;
            }

            // debugger

            //if we have mouse coords, create and show tooltip
            if (this.mouseX && this.mouseY) {
                this.parseOptions(options);
                this.assemble(this.getMarkup(this.text, this.title));
                this.position(el);
                this.layer.style.visibility = 'visible';
                this.visible = true;
            }
        };

        // Set mouse handler callback.
        Hint.captureMouse = function () {
            var self = this;
            document.onmousemove = Hint.mouseMoveHandler.bind(this);
        };

        // Callback for document.onmousemove
        Hint.mouseMoveHandler = function (e) {
            if (!e) {
                e = event;
            }
            // if there is an x pos property, get mouse location
            this.mouseX = this.getMouseX(e);
            this.mouseY = this.getMouseY(e);
            if (this.visible) {

                // debugger;

                this.position(e.target);
            }
        };

        //get mouse x coords
        Hint.getMouseX = function (e) {
            if (e.pageX) {
                return e.pageX;
            }
            return e.clientX ? e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) : this.mouseX;
        };

        //get mouse y coords
        Hint.getMouseY = function (e) {
            if (e.pageY) {
                return e.pageY;
            }
            return e.clientY ? e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) : this.mouseY;
        };

        Hint.parseOptions = function (options) {
            if (options) {
                var optArr = options.split(',');
                for (var i = 0; i < optArr.length; i++) {
                    var args = optArr[i].split(':');
                    eval('this.' + this.trimWhitespace(args[0]) + '="' + this.trimWhitespace(args[1]) + '"');
                }
            }
        };

        Hint.hideTip = function () {
            if (this.visible && this.layer) {
                this.layer.style.visibility = 'hidden';
                this.visible = false;
            }
        };

        Hint.getMarkup = function (text, title) {
            var containerStyle = 'width:' + this.width + ';' + 'border:' + this.border + ' solid ' + this.borderColor + ';' + 'background-color:' + this.backColor + ';' + 'border-radius:2px;' + 'font-family:' + this.fontFace + ';' + 'font-size:' + this.fontSize + ';';

            var titleStyle = 'background-color:' + this.borderColor + ';' + 'padding:' + this.titlePadding + ';' + 'color:' + this.titleTextColor + ';' + 'font-weight: bold;' + 'font-size:' + this.titleFontSize + ';';

            var contentStyle = 'padding:' + this.textPadding + ';' + 'text-align: justify;' + 'color:' + this.textColor + ';';

            var txt = '<div id="hint-container" style="' + containerStyle + '">';
            if (title) {
                txt += '<div id="hint-title" style="' + titleStyle + '">' + title + '</div>';
            }
            if (text) {
                txt += '<div id="hint-content" style="' + contentStyle + '">' + text + '</div>';
            }
            txt += '</div>';
            return txt;
        };

        //Positions popup according to mouse input
        Hint.position = function (el) {
            this.layer.style.left = this.getXPlacement() + 'px';
            this.layer.style.top = this.getYPlacement() + 'px';

            // debugger

            // position(this.layer, el);
        };

        //get horizontal box placement
        Hint.getXPlacement = function () {

            var posX = this.mouseX + parseInt(this.xOffset);
            var widthInt = parseInt(this.width);
            var borderWidthInt = parseInt(this.border) + 3;

            //make sure tooltip fits in window.width
            if (posX + widthInt + borderWidthInt > window.innerWidth) {
                posX = posX - (posX + widthInt + borderWidthInt - window.innerWidth);
            }

            return posX;
        };

        //get vertical box placement
        Hint.getYPlacement = function () {

            // debugger

            var posY = this.mouseY + parseInt(this.yOffset);

            var heightInt = parseInt(document.getElementById(this.divId).scrollHeight);
            var borderWidthInt = parseInt(this.border) + 3;

            //make sure tooltip fits in window.height
            if (posY + heightInt + borderWidthInt > window.innerHeight) {
                // posY = posY - (posY + heightInt + borderWidthInt - window.innerHeight);
                posY = posY - (heightInt + heightInt / 2);
            }

            return posY;
        };

        function position(_tip, _el, opt) {

            var o = {
                "topallowance": 5,
                "leftallowance": 10
            };

            // debugger

            var _window = window,
                _widthOfWindow = _window.innerWidth,
                _heightOfWindow = _window.innerHeight;

            var _widthDifferenceFromXaxisOfRef = _widthOfWindow - _el.getBoundingClientRect().left;
            var _heightDifferenceFromYaxisOfRef = _heightOfWindow - _el.getBoundingClientRect().top + _el.clientHeight / 2;

            var _xAdjustmentOftipWhenExceedAtLeftSide = _tip.children["0"].clientWidth > _widthDifferenceFromXaxisOfRef ? _tip.children["0"].clientWidth - _widthDifferenceFromXaxisOfRef + o.leftallowance : 0;

            var _leftOfTheTip = _el.getBoundingClientRect().left - _xAdjustmentOftipWhenExceedAtLeftSide;
            var _topOfTheTip = _tip.children["0"].clientHeight > _heightDifferenceFromYaxisOfRef ? _el.getBoundingClientRect().top - _tip.children["0"].clientHeight - o.topallowance : _heightOfWindow - _heightDifferenceFromYaxisOfRef + o.topallowance;

            // var _xAdjustmentOftipWhenExceedAtLeftSide = ((_tip.outerWidth() > _widthDifferenceFromXaxisOfRef) ? (_tip.outerWidth() - _widthDifferenceFromXaxisOfRef) + o.leftallowance : 0);
            // var _topOfTheTip = (_tip.outerHeight > _heightDifferenceFromYaxisOfRef) ? (_el.getBoundingClientRect().top - _tip.outerHeight) - o.topallowance : (_heightOfWindow - _heightDifferenceFromYaxisOfRef) + o.topallowance;


            // _tip.style.position = 'absolute';
            _tip.style.top = _topOfTheTip + 'px';
            _tip.style.left = _leftOfTheTip + 'px';
        };

        //Creates the popup
        Hint.assemble = function (input) {
            if (typeof this.layer.innerHTML != 'undefined') {
                this.layer.innerHTML = '<div style="position: absolute; top: 0; left: 0; width: ' + this.width + '; z-index: ' + (this.zIndex + 1) + ';">' + input + '</div>';
            }
        };

        Hint.trimWhitespace = function (str) {
            return str.replace(/^\s+|\s+$/gm, '');
        };

        // Credit to Douglas Crockford for this
        if (!Function.prototype.bind) {
            Function.prototype.bind = function (oThis) {
                if (typeof this !== "function") {
                    // closest thing possible to the ECMAScript 5 internal IsCallable functionâ€‹
                    throw new TypeError("Function.prototype.bind - is not callable");
                }
                var aArgs = Array.prototype.slice.call(arguments, 1),
                    fToBind = this,
                    fNOP = function fNOP() {},
                    fBound = function fBound() {
                    return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
                };
                fNOP.prototype = this.prototype;
                fBound.prototype = new fNOP();
                return fBound;
            };
        }

        // quando todo o load de window
        window.addEventListener('DOMContentLoaded', function () {

            var hints = document.querySelectorAll("[data-i18n*='data-hint-title'][data-i18n*='data-hint-text']");

            // console.log(hints);

            [].forEach.call(hints, function (hint) {

                hint.classList.add('hint');
            });

            Hint.init();
        });

        root.Hint = Hint;
    })(typeof exports === 'undefined' ? window : exports);
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
    // http://stackoverflow.com/questions/3387427/remove-element-by-id
    if (Element.prototype.remove === undefined) {
        Element.prototype.remove = function () {
            this.parentElement.removeChild(this);
        };
    }

    function registerNavMenu() {

        // console.log(navMenu);
        // console.log(menu);
        var navMenu = document.querySelector('.nav-menu');

        if (navMenu === null || navMenu === undefined) {
            return;
        }

        var button = navMenu.querySelector('.show-mobile>li>i');

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

                menu.classList.add('list');
                menu.classList.add('vertical');

                var boundingRect = navMenu.getBoundingClientRect();
                var boundingRect22 = document.body.getBoundingClientRect();

                // console.log(boundingRect);


                var ww = window.innerWidth;

                var div = document.createElement('div');
                div.id = 'xxxx';
                div.style.position = 'absolute';
                div.style.backgroundColor = 'white';
                div.style.boxSizing = 'border-box';
                div.style.top = boundingRect.bottom - 2 + 'px';
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
        };
    }

    window.addEventListener('DOMContentLoaded', function () {

        registerNavMenu();
    });
    (function (root) {
        'use strict';

        // quando todo o load de window
        // window.addEventListener('load', function () {

        window.addEventListener('DOMContentLoaded', function () {

            var optionsGroup = document.querySelectorAll('div.option');

            [].forEach.call(optionsGroup, function (optionGroup) {

                // e do tipo de selecao
                var isSelected = optionGroup.dataset.hasOwnProperty("selected");

                // para mostrar o menu
                optionGroup.onclick = function (e) {
                    e.stopPropagation();

                    this.querySelector(".menu").style.display = "block";
                };

                // para o set do valor
                optionGroup.setSelected = setSelected;

                // os itens do componente
                var itens = optionGroup.querySelectorAll('li');

                // para cada item de list
                [].forEach.call(itens, function (item) {

                    if (isSelected) {
                        // no load do componente verifico se ele esta selecionado
                        if (optionGroup.dataset.selected === item.dataset.value) {
                            // add ao item a class de selecionado
                            item.classList.add('selected');
                        }
                    }

                    // o evento click para cada list do componente
                    item.onclick = function (e) {
                        // se este button não está selecionado e não está disabled
                        if (!this.classList.contains('selected') && !this.classList.contains('disabled')) {

                            e.stopPropagation();

                            // para todos os buttons deste meu componente
                            var itens = this.parentNode.querySelectorAll('li');

                            // removo a class de seleção
                            [].forEach.call(itens, function (item) {
                                item.classList.remove('selected');
                            });

                            if (isSelected) {
                                // add ao button que estou a class de selecionado
                                this.classList.add('selected');

                                // informo ao componente o valor do button selecionado
                                // acho que esta duplicado e nao funciona
                                // this.parentNode.dataset.selected = this.dataset.value;

                                // vou montar a selecao do iten
                                var textContent = this.querySelector('a') || this.querySelector('span') ? (this.querySelector('a') || this.querySelector('span')).textContent : null,
                                    imgContent = this.querySelector('img') ? this.querySelector('img').getAttribute('src') : null;

                                // debugger

                                // neste momento sem display
                                if (this.parentNode.parentNode.parentNode.parentNode.querySelector('strong')) {
                                    this.parentNode.parentNode.parentNode.parentNode.querySelector('strong').textContent = textContent;
                                }
                                if (this.parentNode.parentNode.parentNode.parentNode.querySelector('img')) {
                                    this.parentNode.parentNode.parentNode.parentNode.querySelector('img').setAttribute('src', imgContent);
                                }

                                // informo ao componente o valor do button selecionado
                                this.parentNode.parentNode.parentNode.parentNode.dataset.selected = this.dataset.value;
                            }

                            // debugger

                            // escondo o menu com os itens
                            this.parentNode.parentNode.parentNode.style.display = "none";

                            // para o evento do item escolhido
                            // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
                            var event = new CustomEvent('selected', {
                                'detail': {
                                    'value': this.dataset.value,
                                    'item': this
                                }
                            });

                            optionGroup.dispatchEvent(event);
                        }
                    };
                });
            });
        });

        window.addEventListener('click', function () {
            closeMenus();
        });

        window.addEventListener('keydown', function (e) {

            // ESCAPE key pressed
            if (e.keyCode == 27) {
                closeMenus();
            }
        });

        function closeMenus() {

            // debugger

            var menus = document.querySelectorAll('div.option > .menu');

            // para cada item de list
            [].forEach.call(menus, function (menu) {

                // escondo o menu com os itens
                menu.style.display = "none";
            });
        }

        function setSelected(value) {

            var optionGroup = this;

            // os itens do componente
            var itens = optionGroup.querySelectorAll('li');

            // para cada item de list
            [].forEach.call(itens, function (item) {

                // clear quarquer selecionado
                item.classList.remove('selected');

                // no load do componente verifico se ele esta selecionado
                if (value === item.dataset.value) {
                    // add ao list a class de selecionado
                    item.classList.add('selected');

                    // vou montar a selecao do iten
                    var textContent = (optionGroup.querySelector('a') || optionGroup.querySelector('span')).textContent,
                        imgContent = item.querySelector('img').getAttribute('src');

                    // neste momento sem display
                    // optionGroup.parentNode.parentNode.parentNode.parentNode.querySelector('strong').textContent = textContent;
                    optionGroup.querySelector('img').setAttribute('src', imgContent);

                    // informo ao componente o valor do button selecionado
                    optionGroup.dataset.selected = value;
                }
            });
        }
    })(typeof exports === 'undefined' ? window : exports);
    // https://github.com/ruyadorno/simple-slider


    function getdef(val, def) {
        return val == null ? def : val; // eslint-disable-line
    }

    function len(arr) {
        return arr && arr.length ? arr.length : 0;
    }

    function startSlides(containerElem, children, unit, startVal, visVal, trProp) {
        var style = void 0,
            imgs = [];

        if (!children) {
            children = containerElem.children;
        }

        var i = len(children);

        // Ciro
        containerElem.style.width = "100%";

        while (--i >= 0) {
            imgs[i] = children[i];
            // Ciro
            // regitando class hide
            if (imgs[i].classList.contains('hide')) {
                imgs[i].classList.remove('hide');
            }

            style = imgs[i].style;
            style.position = 'absolute';
            style.top = style.left = style.zIndex = 0;
            style[trProp] = startVal + unit;
        }

        style[trProp] = visVal + unit;
        style.zIndex = 1;

        return imgs;
    }

    function defaultEase(time, begin, change, duration) {
        return (time = time / (duration / 2)) < 1 ? // eslint-disable-line
        change / 2 * time * time * time + begin // eslint-disable-line
        : change / 2 * ((time -= 2) * time * time + 2) + begin; // eslint-disable-line
    }

    function getSlider(options) {
        options = options || {};
        var actualIndex = void 0,
            interval = void 0,
            intervalStartTime = void 0,
            imgs = void 0,
            remainingTime = void 0;

        // Get user defined options or its default values
        var containerElem = getdef(options.container, document.querySelector('*[data-slider]'));
        var trProp = getdef(options.prop, 'left');
        var trTime = getdef(options.duration, 0.5) * 1000;
        var delay = getdef(options.delay, 3) * 1000;
        var unit = getdef(options.unit, '%');
        var startVal = getdef(options.init, -100);
        var visVal = getdef(options.show, 0);
        var endVal = getdef(options.end, 100);
        var paused = options.paused; // eslint-disable-line
        var ease = getdef(options.ease, defaultEase);
        var onChange = getdef(options.onChange, 0);
        var onChangeEnd = getdef(options.onChangeEnd, 0);
        var now = Date.now;

        function reset() {

            if (containerElem) {

                if (len(containerElem.children) > 0) {
                    var style = containerElem.style;
                    style.position = 'relative';
                    style.overflow = 'hidden';
                    style.display = 'block';

                    imgs = startSlides(containerElem, options.children, unit, startVal, visVal, trProp);
                    actualIndex = 0;
                    remainingTime = delay;
                }
            }
        }

        // Slideshow/autoPlay timing logic
        function setAutoPlayLoop() {
            intervalStartTime = now();
            interval = setTimeout(function () {
                intervalStartTime = now();
                remainingTime = delay; // resets time, used by pause/resume logic

                change(nextIndex());

                // loops
                setAutoPlayLoop();
            }, remainingTime);
        }

        function resume() {
            if (isAutoPlay()) {
                if (interval) {
                    clearTimeout(interval);
                }

                setAutoPlayLoop();
            }
        }

        function isAutoPlay() {
            return !paused && len(imgs) > 1;
        }

        function pause() {
            if (isAutoPlay()) {
                remainingTime = delay - (now() - intervalStartTime);
                clearTimeout(interval);
                interval = 0;
            }
        }

        function reverse() {
            var newEndVal = startVal;
            startVal = endVal;
            endVal = newEndVal;
            actualIndex = Math.abs(actualIndex - (len(imgs) - 1));
            imgs = imgs.reverse();
        }

        function change(newIndex) {
            var count = len(imgs);
            while (--count >= 0) {
                imgs[count].style.zIndex = 1;
            }

            imgs[newIndex].style.zIndex = 3;
            imgs[actualIndex].style.zIndex = 2;

            anim(imgs[actualIndex].style, // insertElem
            visVal, // insertFrom
            endVal, // insertTo
            imgs[newIndex].style, // removeElem
            startVal, // removeFrom
            visVal, // removeTo
            trTime, // transitionDuration
            0, // startTime
            0, // elapsedTime
            ease // easeFunc
            );

            actualIndex = newIndex;

            if (onChange) {
                onChange(prevIndex(), actualIndex);
            }
        }

        function next() {
            change(nextIndex());
            resume();
        }

        function prev() {
            change(prevIndex());
            resume();
        }

        function nextIndex() {
            var newIndex = actualIndex + 1;
            return newIndex >= len(imgs) ? 0 : newIndex;
        }

        function prevIndex() {
            var newIndex = actualIndex - 1;
            return newIndex < 0 ? len(imgs) - 1 : newIndex;
        }

        function dispose() {
            clearTimeout(interval);
            document.removeEventListener('visibilitychange', visibilityChange);

            imgs = containerElem = interval = trProp = trTime = delay = startVal = endVal = paused = actualIndex = remainingTime = onChange = onChangeEnd = null;
        }

        function currentIndex() {
            return actualIndex;
        }

        function anim(insertElem, insertFrom, insertTo, removeElem, removeFrom, removeTo, transitionDuration, startTime, elapsedTime, easeFunc) {
            function setProp(elem, from, to) {
                elem[trProp] = easeFunc(elapsedTime - startTime, from, to - from, transitionDuration) + unit;
            }

            if (startTime > 0) {
                if (elapsedTime - startTime < transitionDuration) {
                    setProp(insertElem, insertFrom, insertTo);
                    setProp(removeElem, removeFrom, removeTo);
                } else {
                    insertElem[trProp] = insertTo + unit;
                    removeElem[trProp] = removeTo + unit;

                    if (onChangeEnd) {
                        onChangeEnd(actualIndex, nextIndex());
                    }
                    return;
                }
            }

            requestAnimationFrame(function (time) {
                // Starts time in the first anim iteration
                if (startTime === 0) {
                    startTime = time;
                }

                anim(insertElem, insertFrom, insertTo, removeElem, removeFrom, removeTo, transitionDuration, startTime, time, easeFunc);
            });
        }

        function visibilityChange() {
            if (document.hidden) {
                pause();
            } else {
                resume();
            }
        }

        // configures visibility api handler https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
        document.addEventListener('visibilitychange', visibilityChange);
        reset();

        if (imgs && len(imgs) > 1) {
            resume();
        }

        "#if TEST > 0"; // eslint-disable-line
        return {
            internalState: {
                getInterval: function getInterval() {
                    return interval;
                },
                getRemainingTime: function getRemainingTime() {
                    return remainingTime;
                },
                getImgs: function getImgs() {
                    return imgs;
                },
                getContainerElem: function getContainerElem() {
                    return containerElem;
                },
                setActualIndex: function setActualIndex(val) {
                    actualIndex = val;
                },
                isAutoPlay: isAutoPlay,
                defaultEase: defaultEase,
                reset: reset,
                trProp: trProp,
                trTime: trTime,
                delay: delay,
                unit: unit,
                startVal: startVal,
                visVal: visVal,
                endVal: endVal,
                paused: paused,
                ease: ease
            },
            currentIndex: currentIndex,
            pause: pause,
            resume: resume,
            nextIndex: nextIndex,
            prevIndex: prevIndex,
            next: next,
            prev: prev,
            change: change,
            reverse: reverse,
            dispose: dispose
        };
        "#else"; // eslint-disable-line
        return {
            currentIndex: currentIndex,
            pause: pause,
            resume: resume,
            nextIndex: nextIndex,
            prevIndex: prevIndex,
            next: next,
            prev: prev,
            change: change,
            reverse: reverse,
            dispose: dispose
        };
        "#endif"; // eslint-disable-line
    }

    window.getSlider = getSlider;

    window.addEventListener('DOMContentLoaded', function () {

        getSlider({
            init: -100,
            show: 0,
            end: 100,
            unit: '%'
        });
    });
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