'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.P = exports.PContainer = exports.Blockquote = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Title = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    font-family: ', ';\n    color: ', ';\n    font-size: ', ';\n    line-height: ', ';\n    margin-top: ', ';\n    margin-bottom: ', ';\n'], ['\n    font-family: ', ';\n    color: ', ';\n    font-size: ', ';\n    line-height: ', ';\n    margin-top: ', ';\n    margin-bottom: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-family: ', ';\n    color: ', ';\n    font-size: ', ';\n    margin:0;\n    display: block;\n    padding-left: 1rem;\n    border-left: 4px solid rgba(0, 0, 0, .1);\n    font-style: italic;\n    & > p {\n        margin-bottom: 0;\n    }\n'], ['\n    font-family: ', ';\n    color: ', ';\n    font-size: ', ';\n    margin:0;\n    display: block;\n    padding-left: 1rem;\n    border-left: 4px solid rgba(0, 0, 0, .1);\n    font-style: italic;\n    & > p {\n        margin-bottom: 0;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-family: ', ';\n    color: ', ';\n    display: block;\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n\n    text-align: ', ';\n'], ['\n    font-family: ', ';\n    color: ', ';\n    display: block;\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n\n    text-align: ', ';\n']);

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

var Title = exports.Title = _styledComponents2.default.h1(_templateObject, _variables.font.family, _variables.font.color.heading, _variables.heading.title.size, _variables.heading.title.lineHeight, _variables.heading.title.marginTop, _variables.heading.marginBottom);

var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject, _variables.font.family, _variables.font.color.heading, _variables.heading.h1.size, _variables.heading.h1.lineHeight, _variables.heading.h1.marginTop, _variables.heading.marginBottom);

var H2 = exports.H2 = _styledComponents2.default.h2(_templateObject, _variables.font.family, _variables.font.color.heading, _variables.heading.h2.size, _variables.heading.h2.lineHeight, _variables.heading.h2.marginTop, _variables.heading.marginBottom);

var H3 = exports.H3 = _styledComponents2.default.h3(_templateObject, _variables.font.family, _variables.font.color.heading, _variables.heading.h3.size, _variables.heading.h3.lineHeight, _variables.heading.h3.marginTop, _variables.heading.marginBottom);

var H4 = exports.H4 = _styledComponents2.default.h4(_templateObject, _variables.font.family, _variables.font.color.heading, _variables.heading.h4.size, _variables.heading.h4.lineHeight, _variables.heading.h4.marginTop, _variables.heading.marginBottom);

var H5 = exports.H5 = _styledComponents2.default.h5(_templateObject, _variables.font.family, _variables.font.color.heading, _variables.heading.h5.size, _variables.heading.h5.lineHeight, _variables.heading.h5.marginTop, _variables.heading.marginBottom);

var Blockquote = exports.Blockquote = _styledComponents2.default.blockquote(_templateObject2, _variables.font.family, _variables.font.color.normal, _variables.font.size.normal);

var PContainer = exports.PContainer = _styledComponents2.default.p(_templateObject3, _variables.font.family, _variables.font.color.normal, function (props) {
    return props.size === P_SIZE.large && 'font-size: ' + _variables.font.size.large + ';';
}, function (props) {
    return props.size === P_SIZE.big && 'font-size: ' + _variables.font.size.big + ';';
}, function (props) {
    return props.size === P_SIZE.normal && 'font-size: ' + _variables.font.size.normal + ';';
}, function (props) {
    return props.size === P_SIZE.small && 'font-size: ' + _variables.font.size.small + ';';
}, function (props) {
    return props.size === P_SIZE.smaller && 'font-size: ' + _variables.font.size.smaller + ';';
}, function (props) {
    return props.textAlign;
});

var P_SIZE = {
    large: 'large',
    big: 'big',
    normal: 'normal',
    small: 'small',
    smaller: 'smaller'
};

var P_TEXT_ALIGN = {
    left: 'left',
    center: 'center',
    right: 'right'
};

var P = exports.P = function (_PureComponent) {
    _inherits(P, _PureComponent);

    function P() {
        _classCallCheck(this, P);

        return _possibleConstructorReturn(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments));
    }

    _createClass(P, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;


            return _react2.default.createElement(
                PContainer,
                this.props,
                children
            );
        }
    }]);

    return P;
}(_react.PureComponent);

P.propTypes = {
    size: _propTypes2.default.oneOf(Object.keys(P_SIZE)).isRequired,
    textAlign: _propTypes2.default.oneOf(Object.keys(P_TEXT_ALIGN)).isRequired
};
P.defaultProps = {
    size: P_SIZE.normal,
    textAlign: P_TEXT_ALIGN.left
};


P.size = P_SIZE;
P.textAlign = P_TEXT_ALIGN;