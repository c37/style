'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n\tfont-family: ', ';\n\tfont-size: ', ';\n\tcolor: ', ';\n\tbox-shadow: ', ';\n    display: flex;\n    box-orient: vertical;\n    box-direction: normal;\n\tflex-direction: column;\n    box-sizing: border-box;\n\tmargin: 10px;\n    width: 12.5rem;\n    height: 15rem;\n    background-color: #fff;\n    border: 1px solid #dfe3e6;\n    &:focus {\n        outline: 1px solid ', ';\n    }\n'], ['\n\tfont-family: ', ';\n\tfont-size: ', ';\n\tcolor: ', ';\n\tbox-shadow: ', ';\n    display: flex;\n    box-orient: vertical;\n    box-direction: normal;\n\tflex-direction: column;\n    box-sizing: border-box;\n\tmargin: 10px;\n    width: 12.5rem;\n    height: 15rem;\n    background-color: #fff;\n    border: 1px solid #dfe3e6;\n    &:focus {\n        outline: 1px solid ', ';\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // https://github.com/CompuIves/codesandbox-client/blob/master/packages/app/src/app/components/Alert.js
// https://github.com/CompuIves/codesandbox-client/blob/master/packages/app/src/app/components/Switch.js
// https://github.com/carbon-design-system/carbon-components-react/blob/master/src/components/Card/Card.js
// http://www.carbondesignsystem.com/add-ons/card/code
// https://github.com/carbon-design-system/carbon-components/blob/master/src/components/card/_card.scss
// https://reactjs.org/docs/typechecking-with-proptypes.html
// https://github.com/trendmicro-frontend

var Container = _styledComponents2.default.div(_templateObject, _variables.font.family, _variables.font.size.normal, _variables.font.color.normal, _variables.shadow.normal, _variables.color.outline);

var Card = function Card(props) {
	var _extends2;

	var children = props.children,
	    onBlur = props.onBlur,
	    onClick = props.onClick,
	    onFocus = props.onFocus,
	    onKeyDown = props.onKeyDown,
	    onKeyUp = props.onKeyUp,
	    onMouseDown = props.onMouseDown,
	    onMouseEnter = props.onMouseEnter,
	    onMouseLeave = props.onMouseLeave,
	    onMouseUp = props.onMouseUp;


	return _react2.default.createElement(
		Container,
		_extends({}, props, (_extends2 = {
			onBlur: onBlur && onBlur(undefined),
			onFocus: onFocus && onFocus(undefined),
			onClick: onClick && onClick(undefined)
		}, _defineProperty(_extends2, 'onFocus', onFocus && onFocus(undefined)), _defineProperty(_extends2, 'onKeyDown', onKeyDown && onKeyDown(undefined)), _defineProperty(_extends2, 'onKeyUp', onKeyUp && onKeyUp(undefined)), _defineProperty(_extends2, 'onMouseDown', onMouseDown && onMouseDown(undefined)), _defineProperty(_extends2, 'onMouseEnter', onMouseEnter && onMouseEnter(undefined)), _defineProperty(_extends2, 'onMouseLeave', onMouseLeave && onMouseLeave(undefined)), _defineProperty(_extends2, 'onMouseUp', onMouseUp && onMouseUp(undefined)), _extends2)),
		children
	);
};

Card.propTypes = {
	children: _propTypes2.default.node.isRequired,
	className: _propTypes2.default.string,
	tabIndex: _propTypes2.default.number,
	onBlur: _propTypes2.default.func,
	onClick: _propTypes2.default.func,
	onFocus: _propTypes2.default.func,
	onKeyDown: _propTypes2.default.func,
	onKeyUp: _propTypes2.default.func,
	onMouseDown: _propTypes2.default.func,
	onMouseEnter: _propTypes2.default.func,
	onMouseLeave: _propTypes2.default.func,
	onMouseUp: _propTypes2.default.func
};

Card.defaultProps = {
	tabIndex: 0
};

exports.default = Card;