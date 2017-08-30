'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
            console.log(_this);
            // console.log(ReactDOM.findDOMNode(this));

            var form = _reactDom2.default.findDOMNode(_this),
                inputs = form.querySelectorAll('input:not(.hide)'),
                data = {};

            // console.log(inputs)

            for (var index = 0; index < inputs.length; index++) {
                var element = inputs[index];

                // if (!element.validation()) {
                //     break;
                // }

                data[inputs[index].name] = inputs[index].value;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Form, [{
        key: 'render',
        value: function render() {
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

    function Input(props) {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
    }

    _createClass(Input, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var propsInput = {
                name: this.props.name,
                type: this.props.type,
                className: this.props.className,
                onChange: this.props.onChange,
                onBlur: function onBlur(e) {

                    // console.log(e.target.parentNode);
                    // console.log(this.props.validations)

                    var elementValidation = e.target.parentNode.querySelector('.validation') || e.target.parentNode.parentNode.querySelector('.validation');

                    elementValidation.classList.add('hide');
                    e.target.classList.remove("required");

                    if (_this3.props.validations && _this3.props.validations.indexOf('required') > 0 && e.target.value === "") {
                        e.target.classList.add("required");
                        elementValidation.classList.toggle('hide');
                    }
                },
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
                    {
                        if (this.props.focus) {
                            // https://stackoverflow.com/questions/39735816/how-do-i-set-a-ref-when-using-react-createelement
                            return _react2.default.createElement('input', _extends({}, propsInput, { ref: function ref(input) {
                                    return input && input.focus();
                                } }));
                        }
                        // https://stackoverflow.com/questions/28889826/react-set-focus-on-input-after-render
                        return _react2.default.createElement('input', _extends({}, propsInput, { ref: 'input' }));
                    }
            }
            // para os tipos de componentes
        }
    }]);

    return Input;
}(_react.Component);

Form.Button = function (_Component3) {
    _inherits(Button, _Component3);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this4 = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this4.handleClick = function (e) {
            if (_this4.props.form && !e.target.classList.contains('disabled')) {
                var form = document.getElementById(_this4.props.form),
                    submit = form.querySelector('input[type="submit"]');
                submit.click();
            }
        };

        return _this4;
    }

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