'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    font-family: ', ';\n    font-size: ', ';\n    color: ', ';\n    list-style: none;\n    padding: 0;\n    ', '\n'], ['\n    font-family: ', ';\n    font-size: ', ';\n    color: ', ';\n    list-style: none;\n    padding: 0;\n    ', '\n']);

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

var Container = _styledComponents2.default.ul(_templateObject, _variables.font.family, _variables.font.size.normal, _variables.font.color.normal, function (props) {
    return props.orientation === 'horizontal' && '\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    ';
});

var ORIENTATION = {
    vertical: 'vertical',
    horizontal: 'horizontal'
};

var APPEARANCE = {
    styled: 'styled',
    unstyled: 'unstyled'
};

var List = function (_PureComponent) {
    _inherits(List, _PureComponent);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                orientation = _props.orientation,
                appearance = _props.appearance;


            var items = _react2.default.Children.map(children, function (child, i) {
                return _react2.default.cloneElement(child, {
                    orientation: orientation,
                    appearance: appearance
                });
            });

            return _react2.default.createElement(
                Container,
                this.props,
                items
            );
        }
    }]);

    return List;
}(_react.PureComponent);

List.propTypes = {
    children: _propTypes2.default.node.isRequired,
    className: _propTypes2.default.string,
    orientation: _propTypes2.default.oneOf(Object.keys(ORIENTATION)).isRequired,
    appearance: _propTypes2.default.oneOf(Object.keys(APPEARANCE)).isRequired
};
List.defaultProps = {
    orientation: ORIENTATION.vertical,
    appearance: APPEARANCE.styled
};
exports.default = List;


List.orientation = ORIENTATION;
List.appearance = APPEARANCE;