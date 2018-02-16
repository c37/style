'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    transition: all 250ms cubic-bezier(0.5, 0, 0.1, 1);\n    overflow: hidden;\n'], ['\n    transition: all 250ms cubic-bezier(0.5, 0, 0.1, 1);\n    overflow: hidden;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    letter-spacing: 0.5px;\n    border: 1px solid ', ';\n    display: inline-block;\n    background: none;\n    appearance: none;\n    cursor: pointer;\n    width: 100%;\n    color: #152935;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    cursor: pointer;\n    padding: 0.5rem 0 0.5rem 0.2rem;\n    outline: none;\n'], ['\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    letter-spacing: 0.5px;\n    border: 1px solid ', ';\n    display: inline-block;\n    background: none;\n    appearance: none;\n    cursor: pointer;\n    width: 100%;\n    color: #152935;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    cursor: pointer;\n    padding: 0.5rem 0 0.5rem 0.2rem;\n    outline: none;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    margin: 0 0 0 0.3rem;\n    font-size:13px;\n'], ['\n    margin: 0 0 0 0.3rem;\n    font-size:13px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    transition: all 250ms cubic-bezier(0.5, 0, 0.1, 1);\n    height: 1rem;\n    width: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;        \n    padding: 0.1rem 0.05em 0.1rem 0.1rem;\n    margin: 0 0 0 0.25rem;\n    fill: #8c9ba5;\n    ', '\n    ', ':focus & {\n        outline: 1px solid ', ';\n        outline-offset: -.5px;\n    }    \n'], ['\n    transition: all 250ms cubic-bezier(0.5, 0, 0.1, 1);\n    height: 1rem;\n    width: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;        \n    padding: 0.1rem 0.05em 0.1rem 0.1rem;\n    margin: 0 0 0 0.25rem;\n    fill: #8c9ba5;\n    ', '\n    ', ':focus & {\n        outline: 1px solid ', ';\n        outline-offset: -.5px;\n    }    \n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    transition: all 300ms cubic-bezier(0, 0, 0.25, 1);\n    padding: 0 1rem 0 1.5rem;\n    height: 0;\n    visibility: hidden;\n    border-top: 1px solid white;\n    opacity: 0;\n    ', '\n'], ['\n    transition: all 300ms cubic-bezier(0, 0, 0.25, 1);\n    padding: 0 1rem 0 1.5rem;\n    height: 0;\n    visibility: hidden;\n    border-top: 1px solid white;\n    opacity: 0;\n    ', '\n']);

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

var Container = _styledComponents2.default.li(_templateObject);

var Header = _styledComponents2.default.button(_templateObject2, _variables.borderColor);

var Title = _styledComponents2.default.p(_templateObject3);

var Button = _styledComponents2.default.div(_templateObject4, function (props) {
    return props.open && ' \n        transform: rotate(90deg);\n        fill: ' + _variables.color.outline + ';\n    ';
}, Header, _variables.color.outline);

var Content = _styledComponents2.default.div(_templateObject5, function (props) {
    return props.open && ' \n        height: auto;\n        visibility: visible;\n        opacity: 1;\n        transition: all 300ms cubic-bezier(0.25, 0, 1, 1);\n    ';
});

var Item = function (_Component) {
    _inherits(Item, _Component);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                id = _props.id,
                title = _props.title,
                open = _props.open,
                children = _props.children,
                getState = _props.getState,
                isOpen = getState().itemActive && getState().itemActive.props.id === id;


            return _react2.default.createElement(
                Container,
                this.props,
                _react2.default.createElement(
                    Header,
                    { onClick: function onClick(e) {
                            _this2.props.updateState({ itemActive: _this2 });
                            _this2.props.onChange(_this2);
                        } },
                    _react2.default.createElement(
                        Button,
                        { open: isOpen },
                        _react2.default.createElement(
                            'svg',
                            { width: '8', height: '12', viewBox: '0 0 8 12', fillRule: 'evenodd' },
                            _react2.default.createElement('polygon', { stroke: 'none', points: '0 10.6 4.7 6 0 1.4 1.4 0 7.5 6 1.4 12' })
                        )
                    ),
                    _react2.default.createElement(
                        Title,
                        null,
                        ' ',
                        title,
                        ' '
                    )
                ),
                _react2.default.createElement(
                    Content,
                    { open: isOpen },
                    children
                )
            );
        }
    }]);

    return Item;
}(_react.Component);

Item.propTypes = {
    children: _propTypes2.default.node.isRequired,
    className: _propTypes2.default.string,
    title: _propTypes2.default.string.isRequired,
    open: _propTypes2.default.bool.isRequired
};
Item.defaultProps = {
    title: 'Section',
    open: false
};
exports.default = Item;