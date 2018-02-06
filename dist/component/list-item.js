'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    padding: ', ';\n    &:hover {\n        color: ', ';\n        cursor: pointer;\n    }\n\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n\n    ', '\n    ', '\n\n    ', '\n    ', '\n    \n'], ['\n    padding: ', ';\n    &:hover {\n        color: ', ';\n        cursor: pointer;\n    }\n\n    ', '\n    ', '\n    ', '\n    \n    ', '\n    ', '\n    ', '\n\n    ', '\n    ', '\n\n    ', '\n    ', '\n    \n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var Container = _styledComponents2.default.li(_templateObject, _variables.padding.normal, _variables.font.color.hover, function (props) {
    return props.textAlign === 'left' && '\n        text-align: left;\n    ';
}, function (props) {
    return props.textAlign === 'center' && '\n        text-align: center;\n    ';
}, function (props) {
    return props.textAlign === 'right' && '\n        text-align: right;\n    ';
}, function (props) {
    return props.appearance === 'styled' && '\n        &:hover {\n            background-color: ' + _variables.color.hover + ';\n        }\n    ';
}, function (props) {
    return props.appearance === 'styled' && props.orientation === 'horizontal' && '\n        border-right: 1px solid ' + _variables.color.border + ';\n        &:last-child {\n            border-right: none;\n        }\n    ';
}, function (props) {
    return props.appearance === 'styled' && props.orientation === 'vertical' && '\n        border-bottom: 1px solid ' + _variables.color.border + ';\n        &:last-child {\n            border-bottom: none;\n        }\n    ';
}, function (props) {
    return props.appearance === 'styled' && props.selected && '\n        background-color: ' + _variables.color.selected + ';\n        &:hover {\n            color: ' + _variables.font.color.normal + ';\n            cursor: default;\n        }\n    ';
}, function (props) {
    return props.appearance === 'styled' && props.disabled && '\n        background-color: ' + _variables.color.disabled + ';\n        opacity: .5;\n        &:hover {\n            color: ' + _variables.font.color.normal + ';\n            cursor: default;\n        }\n    ';
}, function (props) {
    return props.appearance === 'unstyled' && props.selected && '\n        font-weight: 500;\n        &:hover {\n            color: ' + _variables.font.color.normal + ';\n            cursor: default;\n        }\n    ';
}, function (props) {
    return props.appearance === 'unstyled' && props.disabled && '\n        opacity: .5;\n        &:hover {\n            color: ' + _variables.font.color.normal + ';\n            cursor: default;\n        }\n    ';
});

var TEXT_ALIGN = {
    left: 'left',
    center: 'center',
    right: 'right'
};

var ListItem = function (_PureComponent) {
    _inherits(ListItem, _PureComponent);

    function ListItem() {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    _createClass(ListItem, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;


            return _react2.default.createElement(
                Container,
                this.props,
                children
            );
        }
    }]);

    return ListItem;
}(_react.PureComponent);

ListItem.propTypes = {
    children: _propTypes2.default.node.isRequired,
    className: _propTypes2.default.string,
    textAlign: _propTypes2.default.oneOf(Object.keys(TEXT_ALIGN)).isRequired,
    selected: _propTypes2.default.bool.isRequired,
    disabled: _propTypes2.default.bool.isRequired
};
ListItem.defaultProps = {
    textAlign: TEXT_ALIGN.left,
    selected: false,
    disabled: false
};
exports.default = ListItem;


ListItem.textAlign = TEXT_ALIGN;