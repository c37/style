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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_Component) {
    _inherits(Option, _Component);

    function Option() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Option);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Option.__proto__ || Object.getPrototypeOf(Option)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (item) {
            // console.log(item);

            var element = _reactDom2.default.findDOMNode(_this);

            element.querySelector(".menu").style.display = "none";

            if (typeof _this.props.onChange === 'function') {
                _this.props.onChange(item);
            }
        }, _this.updateState = function (state) {
            _this.setState(state);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Option, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // console.log(this);

            var self = this,
                itemSelected = void 0,
                itemChildren = this.props.children;

            itemSelected = itemChildren.filter(function (item) {
                return item.props.value === self.props.selected;
            }).pop();

            // console.log(itemSelected);

            this.state = { itemSelected: itemSelected };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // console.log(this)

            var itemSelected = this.state.itemSelected,
                itemChildren = void 0,
                divContainer = void 0,
                propsChildren = void 0;

            itemChildren = _react2.default.Children.map(itemSelected.props.children, function (item) {
                if (item.type === "span") {
                    return _react2.default.createElement('strong', null, item.props.children);
                }
                return item;
            });

            // console.log(itemChildren);

            divContainer = _react2.default.createElement('div', {
                onClick: function onClick(e) {
                    // console.log(this);
                    // console.log(ReactDOM.findDOMNode(this))

                    var element = _reactDom2.default.findDOMNode(_this2);

                    element.querySelector(".menu").style.display = "block";
                }
            }, itemChildren, _react2.default.createElement('i', { className: 'caret' }));

            propsChildren = _react2.default.Children.map(this.props.children, function (child) {
                return _react2.default.cloneElement(child, {
                    className: itemSelected.props.value === child.props.value ? 'selected' : '',
                    onChange: _this2.onChange,
                    updateState: _this2.updateState
                });
            });

            return (
                // <div className="option margin-0" style={this.props.style}>
                _react2.default.createElement(
                    'div',
                    { className: 'option', style: this.props.style },
                    divContainer,
                    _react2.default.createElement(
                        'div',
                        { className: 'menu right', style: { display: "none" } },
                        _react2.default.createElement(
                            'div',
                            { className: 'content' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'body' },
                                propsChildren
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Option;
}(_react.Component);

exports.default = Option;


Option.Item = function (_Component2) {
    _inherits(Item, _Component2);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: 'render',

        // constructor(props) {
        //     super(props);
        // }
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                'li',
                { onClick: function onClick(e) {
                        _this4.props.updateState({ itemSelected: _this4 });
                        _this4.props.onChange(_this4);
                    },
                    className: this.props.className },
                this.props.children
            );
        }
    }]);

    return Item;
}(_react.Component);