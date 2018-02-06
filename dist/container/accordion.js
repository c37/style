'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    font-family: ', ';\n    list-style: none;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 0;\n'], ['\n    font-family: ', ';\n    list-style: none;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.ul(_templateObject, _variables.font.family);

var Accordion = function (_PureComponent) {
    _inherits(Accordion, _PureComponent);

    function Accordion() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Accordion);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call.apply(_ref, [this].concat(args))), _this), _this.updateState = function (state) {
            _this.setState(state);
        }, _this.getState = function () {
            return _this.state;
        }, _this.handleChange = function (itemActive) {
            _this.props.onChange(itemActive);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Accordion, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.state = {
                itemActive: this.props.children.filter(function (item) {
                    return item.props.open;
                }).pop()
            };
        }

        // componentWillUpdate() {
        //     console.log('render itens');
        // }

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // ao render do componente, criamos uma uma nova lista dos children com a nova referencia para o evento PAI
            var items = _react2.default.Children.map(this.props.children, function (child, i) {
                return _react2.default.cloneElement(child, {
                    onChange: _this2.handleChange,
                    updateState: _this2.updateState,
                    getState: _this2.getState
                });
            });

            return _react2.default.createElement(
                Container,
                this.props,
                items
            );
        }
    }]);

    return Accordion;
}(_react.PureComponent);

Accordion.propTypes = {
    children: _propTypes2.default.node.isRequired,
    className: _propTypes2.default.string,
    onChange: _propTypes2.default.func
};
Accordion.defaultProps = {
    onChange: function onChange() {}
};
exports.default = Accordion;