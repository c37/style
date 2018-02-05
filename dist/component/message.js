'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    font-family: ', ';\n    font-smoothing: antialiased;\n    box-shadow: ', ';\n    display: flex;\n    box-pack: justify;\n    flex-pack: justify;\n    box-sizing: border-box;\n    justify-content: space-between;\n    width: 13.875rem;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n    background-color: ', ';\n    color: #152935;\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    margin-right: 1rem;\n\n    ', '\n    ', '\n    ', '\n    ', '\n\n'], ['\n    font-family: ', ';\n    font-smoothing: antialiased;\n    box-shadow: ', ';\n    display: flex;\n    box-pack: justify;\n    flex-pack: justify;\n    box-sizing: border-box;\n    justify-content: space-between;\n    width: 13.875rem;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n    background-color: ', ';\n    color: #152935;\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    margin-right: 1rem;\n\n    ', '\n    ', '\n    ', '\n    ', '\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    border: none;\n    cursor: pointer;\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    position: relative;\n    &:focus{\n        outline: 1px solid ', ';\n    }\n'], ['\n    border: none;\n    cursor: pointer;\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    position: relative;\n    &:focus{\n        outline: 1px solid ', ';\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    height: 10px;\n    width: 10px;\n    fill: #5a6872;\n    position: absolute;\n    top: -4px;\n    right: 1px;\n'], ['\n    height: 10px;\n    width: 10px;\n    fill: #5a6872;\n    position: absolute;\n    top: -4px;\n    right: 1px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    font-size: 0.875rem;\n    font-weight: 600;\n    margin: 0;\n    letter-spacing: 0;\n    line-height: 1;\n    padding-bottom: 0.125rem;\n'], ['\n    font-size: 0.875rem;\n    font-weight: 600;\n    margin: 0;\n    letter-spacing: 0;\n    line-height: 1;\n    padding-bottom: 0.125rem;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    font-size: 0.75rem;\n    color: #5a6872;\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n    line-height: 1.2;\n'], ['\n    font-size: 0.75rem;\n    color: #5a6872;\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n    line-height: 1.2;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    font-size: 0.75rem;\n    color: #5a6872;\n    line-height: 1;\n'], ['\n    font-size: 0.75rem;\n    color: #5a6872;\n    line-height: 1;\n']);

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

var Container = _styledComponents2.default.div(_templateObject, _variables.fontFamily, _variables.shadowUp, _variables.color.background, function (props) {
    return props.type === 'success' && ' border-left: 6px solid ' + _variables.color.success + ';';
}, function (props) {
    return props.type === 'info' && ' border-left: 6px solid ' + _variables.color.info + ';';
}, function (props) {
    return props.type === 'warning' && ' border-left: 6px solid ' + _variables.color.warning + ';';
}, function (props) {
    return props.type === 'error' && ' border-left: 6px solid ' + _variables.color.error + ';';
});

var Button = _styledComponents2.default.div(_templateObject2, _variables.color.outline);

var Icon = _styledComponents2.default.div(_templateObject3);

var Title = _styledComponents2.default.h3(_templateObject4);

var SubTitle = _styledComponents2.default.div(_templateObject5);

var Text = _styledComponents2.default.div(_templateObject6);

var TYPES = {
    error: 'error',
    success: 'success',
    info: 'info',
    warning: 'warning'
};

var Message = function (_PureComponent) {
    _inherits(Message, _PureComponent);

    function Message() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Message);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            isOpen: true
        }, _this.handleClose = function (e) {
            _this.setState({ isOpen: false });
            _this.props.onClose(e);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Message, [{
        key: 'render',
        value: function render() {
            if (!this.state.isOpen) {
                return null;
            } else {
                var _props = this.props,
                    type = _props.type,
                    title = _props.title,
                    subtitle = _props.subtitle,
                    text = _props.text;


                return _react2.default.createElement(
                    Container,
                    this.props,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            Title,
                            null,
                            title
                        ),
                        _react2.default.createElement(
                            SubTitle,
                            null,
                            subtitle
                        ),
                        _react2.default.createElement(
                            Text,
                            null,
                            text
                        )
                    ),
                    _react2.default.createElement(
                        Button,
                        {
                            tabIndex: 0,
                            onClick: this.handleClose },
                        _react2.default.createElement(
                            Icon,
                            null,
                            _react2.default.createElement(
                                'svg',
                                { width: '10', height: '10', viewBox: '0 0 10 10', fillRule: 'evenodd' },
                                _react2.default.createElement('path', { d: 'M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z' })
                            )
                        )
                    )
                );
            }
        }
    }]);

    return Message;
}(_react.PureComponent);

Message.propTypes = {
    className: _propTypes2.default.string,
    type: _propTypes2.default.oneOf(Object.keys(TYPES)).isRequired,
    title: _propTypes2.default.string.isRequired,
    subtitle: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string,
    onClose: _propTypes2.default.func
};
Message.defaultProps = {
    type: TYPES.success,
    title: 'Provide a title',
    subtitle: 'Provide a subtitle',
    text: 'Provide a text',
    onClose: function onClose() {}
};
exports.default = Message;


Message.types = TYPES;