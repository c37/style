'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // https://facebook.github.io/react/docs/forms.html
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation
// https://stackoverflow.com/questions/41415262/react-get-input-value-on-form-submit-and-display-it?answertab=active#tab-top
// http://blog.revathskumar.com/2015/07/submit-a-form-with-react.html


var Form = function (_Component) {
    _inherits(Form, _Component);

    function Form() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Form);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
            e.preventDefault();

            // console.log(e);
            // console.log(this);
            // console.log(ReactDOM.findDOMNode(this));

            var form = _reactDom2.default.findDOMNode(_this),
                inputs = form.querySelectorAll('input:not(.hide)'),
                data = {};

            // console.log(inputs)

            inputs.forEach(function (input) {
                data[input.name] = input.value;
            });

            // console.log(data);

            if (typeof _this.props.onSubmit === 'function') {
                _this.props.onSubmit(data);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Form, [{
        key: 'render',
        value: function render() {
            // let items = React.Children.map(this.props.children, child => {

            //     // console.log(React.Children.count(child.props.children))

            //     if (child.type === 'div') {
            //         // console.log(child)

            //     //     if (child.props.children.length) {
            //     //         console.log('arr')
            //     //     } else {
            //     //         // console.log('only')
            //     //         if (typeof(child.props.children.type) === 'function') {
            //     //             child.props.children = React.cloneElement(child.props.children, {
            //     //                 rel: 'sasasas'
            //     //             })
            //     //         }
            //     //     }

            //     //     console.log(child.props.children)

            //     //     // if (typeof(child.props.children[0].type) === 'function'){
            //     //     //     child.props.children[0] = React.cloneElement(child.props.children[0], {
            //     //     //         rel: 'sasasas'
            //     //     //     })
            //     //     // }

            //     } else {
            //         return child;
            //     }

            // });


            return _react2.default.createElement(
                'form',
                { id: this.props.id, onSubmit: this.handleSubmit, className: this.props.className, style: this.props.style },
                this.props.children,
                _react2.default.createElement('input', { type: 'submit', className: 'hide' })
            );
        }
    }]);

    return Form;
}(_react.Component);

exports.default = Form;


Form.Input = function (_Component2) {
    _inherits(Input, _Component2);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
        key: 'render',

        // constructor(props) {
        //     super(props);
        // }
        value: function render() {

            var propsInput = {
                name: this.props.name,
                type: this.props.type,
                className: this.props.className,
                style: this.props.style,
                placeholder: this.props.placeholder
            };

            // motando as validations no componente html
            if (this.props.validations && this.props.validations.indexOf('required') > 0) {
                propsInput.required = 'required';
            }
            // motando as validations no componente html

            // para os tipos de componentes
            switch (this.props.type) {
                case 'checkbox':
                    var propsSpan = {
                        className: "checkbox clickable",
                        onClick: function onClick() {
                            document.getElementById(propsInput.id).checked = !document.getElementById(propsInput.id).checked;
                        }
                    },
                        propsDiv = {
                        className: this.props.className
                    };

                    // se o checkbox esta checked
                    if (this.props.checked && (this.props.checked === true || this.props.checked === 'checked')) {
                        propsInput.defaultChecked = "true";
                    }
                    // se o checkbox esta checked

                    // console.log(propsInput)

                    // let span =  React.createElement('span', propsSpan);

                    return _react2.default.createElement('div', propsDiv, _react2.default.createElement('input', propsInput), _react2.default.createElement('span', propsSpan, this.props.label));
                default:
                    return _react2.default.createElement('input', propsInput);
            }
            // para os tipos de componentes
        }
    }]);

    return Input;
}(_react.Component);

Form.Button = function (_Component3) {
    _inherits(Button, _Component3);

    function Button() {
        var _ref2;

        var _temp2, _this3, _ret2;

        _classCallCheck(this, Button);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref2, [this].concat(args))), _this3), _this3.handleClick = function () {
            if (_this3.props.form) {
                var form = document.getElementById(_this3.props.form),
                    submit = form.querySelector('input[type="submit"]');
                submit.click();
            }
        }, _temp2), _possibleConstructorReturn(_this3, _ret2);
    }
    // constructor(props) {
    //     super(props);
    // }


    _createClass(Button, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'button',
                { id: this.props.id, className: this.props.className, style: this.props.style, onClick: this.handleClick },
                this.props.children
            );
        }
    }]);

    return Button;
}(_react.Component);