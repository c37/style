'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _gridStyled = require('grid-styled');

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SIZE = {
    full: 'full',
    big: 'big',
    medium: 'medium',
    small: 'small'
};

var Page = function (_PureComponent) {
    _inherits(Page, _PureComponent);

    function Page() {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
    }

    _createClass(Page, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                size = _props.size;

            var content = void 0;

            switch (size) {
                case SIZE.big:
                    content = _react2.default.createElement(
                        _gridStyled.Flex,
                        _extends({}, this.props, { wrap: true, width: 960 }),
                        children
                    );
                    break;
                case SIZE.medium:
                    content = _react2.default.createElement(
                        _gridStyled.Flex,
                        _extends({}, this.props, { wrap: true, width: 768 }),
                        children
                    );
                    break;
                case SIZE.small:
                    content = _react2.default.createElement(
                        _gridStyled.Flex,
                        _extends({}, this.props, { wrap: true, width: 576 }),
                        children
                    );
                    break;
                default:
                    content = _react2.default.createElement(
                        _gridStyled.Flex,
                        _extends({}, this.props, { wrap: true, justify: 'center', style: { height: '100%', width: '100%' } }),
                        children
                    );
                    break;
            }

            return content;
        }
    }]);

    return Page;
}(_react.PureComponent);

Page.propTypes = {
    children: _propTypes2.default.node.isRequired,
    className: _propTypes2.default.string,
    size: _propTypes2.default.oneOf(Object.keys(SIZE)).isRequired
};
Page.defaultProps = {
    size: SIZE.full
};
exports.default = Page;


Page.size = SIZE;