/**
 *
 * Static Here - in Mon May 15 2017 16:51:40 GMT-0300 (BRT)
 *
 * c37-styleguide - styleguide of C37 - CNC
 * @version 0.0.1
 * @link http://styleguide.c37.co
 * @license CC BY-SA 4.0
 *
 */
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.hint = mod.exports;
	}
})(this, function (exports) {
	'use strict';

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
});