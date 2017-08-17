'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_Component) {
    _inherits(Tab, _Component);

    function Tab() {
        _classCallCheck(this, Tab);

        var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this));

        _this.handleChange = function (tab) {
            // console.log(tab);

            if (typeof _this.props.onChange === 'function') {
                _this.props.onChange(tab);
            }
        };

        _this.updateState = function (state) {
            _this.setState(state);
        };

        _this.getState = function () {
            return _this.state;
        };

        _this.state = { headerActive: '' };
        return _this;
    }

    _createClass(Tab, [{
        key: 'componentWillMount',
        value: function componentWillMount() {

            var headerActive = void 0;

            var header = this.props.children[0],
                headerItems = header.props.children;

            // console.log(headerItems)

            headerActive = headerItems.filter(function (item) {
                return item.props.active;
            }).pop();

            // console.log(headerActive)

            this.state = { headerActive: headerActive };
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            // console.log('render tab');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var items = _react2.default.Children.map(this.props.children, function (child) {
                if (child.type.name === 'TabHeader') {
                    return _react2.default.cloneElement(child, {
                        onChange: _this2.handleChange,
                        updateState: _this2.updateState,
                        getState: _this2.getState
                    });
                } else {
                    return _react2.default.cloneElement(child, {
                        getState: _this2.getState
                    });
                }
            });

            return _react2.default.createElement(
                'div',
                { id: this.props.id, className: 'tab' },
                items
            );
        }
    }]);

    return Tab;
}(_react.Component);

exports.default = Tab;


Tab.Header = function (_Component2) {
    _inherits(TabHeader, _Component2);

    function TabHeader() {
        _classCallCheck(this, TabHeader);

        return _possibleConstructorReturn(this, (TabHeader.__proto__ || Object.getPrototypeOf(TabHeader)).call(this));
    }

    _createClass(TabHeader, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            // console.log(this.props.children)
            // https://egghead.io/lessons/react-use-react-cloneelement-to-extend-functionality-of-children-components
            var items = _react2.default.Children.map(this.props.children, function (child) {
                return _react2.default.cloneElement(child, {
                    onChange: _this4.props.onChange,
                    updateState: _this4.props.updateState,
                    getState: _this4.props.getState
                });
            });

            // console.log(this)
            // console.log(items)

            return _react2.default.createElement(
                'ul',
                { className: 'header' },
                items
            );
        }
    }]);

    return TabHeader;
}(_react.Component);

Tab.Header.Item = function (_Component3) {
    _inherits(TabHeaderItem, _Component3);

    function TabHeaderItem() {
        _classCallCheck(this, TabHeaderItem);

        return _possibleConstructorReturn(this, (TabHeaderItem.__proto__ || Object.getPrototypeOf(TabHeaderItem)).apply(this, arguments));
    }

    _createClass(TabHeaderItem, [{
        key: 'render',
        value: function render() {
            var _this6 = this;

            var state = this.props.getState();

            return (
                // https://stackoverflow.com/questions/30533171/react-js-conditionally-applying-class-attributes
                _react2.default.createElement(
                    'li',
                    { id: this.props.id,
                        className: "item".concat(this.props.reference === state.headerActive.props.reference ? " active" : ""),
                        onClick: function onClick(e) {
                            _this6.props.updateState({ headerActive: _this6 });
                            _this6.props.onChange(_this6);
                        } },
                    this.props.children
                )
            );
        }
    }]);

    return TabHeaderItem;
}(_react.Component);

Tab.Body = function (_Component4) {
    _inherits(TabBody, _Component4);

    function TabBody() {
        _classCallCheck(this, TabBody);

        return _possibleConstructorReturn(this, (TabBody.__proto__ || Object.getPrototypeOf(TabBody)).apply(this, arguments));
    }

    _createClass(TabBody, [{
        key: 'render',
        value: function render() {
            var _this8 = this;

            var items = _react2.default.Children.map(this.props.children, function (child) {
                return _react2.default.cloneElement(child, {
                    getState: _this8.props.getState
                });
            });

            return _react2.default.createElement(
                'div',
                { className: 'body padding-20' },
                items
            );
        }
    }]);

    return TabBody;
}(_react.Component);

Tab.Body.Item = function (_Component5) {
    _inherits(TabBodyItem, _Component5);

    function TabBodyItem() {
        _classCallCheck(this, TabBodyItem);

        return _possibleConstructorReturn(this, (TabBodyItem.__proto__ || Object.getPrototypeOf(TabBodyItem)).apply(this, arguments));
    }

    _createClass(TabBodyItem, [{
        key: 'render',
        value: function render() {

            var state = this.props.getState();

            return _react2.default.createElement(
                'div',
                { className: "item".concat(this.props.id === state.headerActive.props.reference ? " active" : "") },
                this.props.children
            );
        }
    }]);

    return TabBodyItem;
}(_react.Component);