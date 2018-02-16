'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    font-family: ', ';\n    font-size: ', ';\n\n    background:#212121;\n    border-right:1px solid #e5e5e5;\n    position:relative;\n    float: left;\n    top:0;\n    bottom:0;\n    height:100%;\n    left:0;\n    width:60px;\n    overflow:hidden;\n    -webkit-transition:width .05s linear;\n    transition:width .05s linear;\n    -webkit-transform:translateZ(0) scale(1,1);\n    z-index:1000;\n\n\n    &:hover{\n        width:250px;\n        overflow:visible;        \n    }\n'], ['\n    font-family: ', ';\n    font-size: ', ';\n\n    background:#212121;\n    border-right:1px solid #e5e5e5;\n    position:relative;\n    float: left;\n    top:0;\n    bottom:0;\n    height:100%;\n    left:0;\n    width:60px;\n    overflow:hidden;\n    -webkit-transition:width .05s linear;\n    transition:width .05s linear;\n    -webkit-transform:translateZ(0) scale(1,1);\n    z-index:1000;\n\n\n    &:hover{\n        width:250px;\n        overflow:visible;        \n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin:7px 0;\n    padding:0;\n'], ['\n    margin:7px 0;\n    padding:0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

var _sidebarHeader = require('./sidebar-header');

var _sidebarHeader2 = _interopRequireDefault(_sidebarHeader);

var _sidebarItem = require('./sidebar-item');

var _sidebarItem2 = _interopRequireDefault(_sidebarItem);

var _sidebarFooter = require('./sidebar-footer');

var _sidebarFooter2 = _interopRequireDefault(_sidebarFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // http://react.carbondesignsystem.com/?selectedKind=InteriorLeftNav&selectedStory=Default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
// https://github.com/carbon-design-system/carbon-components-react/tree/master/src/components/InteriorLeftNav
// https://react.semantic-ui.com/modules/sidebar#sidebar-example-left-push
// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/modules/Sidebar/SidebarPushable.js
// https://stackoverflow.com/questions/39974486/accordion-sidebar-menu-using-nav-components-with-react-bootstrap
// https://github.com/trendmicro-frontend/react-sidenav
// https://codepen.io/ciro-maciel/pen/JpONeN


var Container = _styledComponents2.default.nav(_templateObject, _variables.font.family, _variables.font.size.normal);

var List = _styledComponents2.default.ul(_templateObject2);

var SideBar = function (_PureComponent) {
    _inherits(SideBar, _PureComponent);

    function SideBar() {
        _classCallCheck(this, SideBar);

        return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
    }

    _createClass(SideBar, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // this.state = {
            //     itemActive: this.props.children.filter(function (item) {
            //         return item.props.open
            //     }).pop()
            // };
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;


            var items = {};
            items.header = this.props.children[0];
            items.list = [];
            items.footer = this.props.children[this.props.children.length - 1];

            items.list = _react2.default.Children.map(this.props.children, function (child, i) {
                if (child.type === _sidebarItem2.default) {
                    return child;
                }
            });

            console.log(items);

            return _react2.default.createElement(
                Container,
                null,
                items.header,
                _react2.default.createElement(
                    List,
                    null,
                    items.list
                ),
                items.footer
            );
        }
    }]);

    return SideBar;
}(_react.PureComponent);

SideBar.propTypes = {
    children: _propTypes2.default.node.isRequired,
    className: _propTypes2.default.string,
    onChange: _propTypes2.default.func
};
SideBar.defaultProps = {
    onChange: function onChange() {}
};
exports.default = SideBar;


SideBar.Header = _sidebarHeader2.default;
SideBar.Item = _sidebarItem2.default;
SideBar.Footer = _sidebarFooter2.default;