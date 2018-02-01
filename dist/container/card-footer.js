'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\tbox-align: center;\n\tflex-align: center;\n\talign-items: center;\n\tbox-pack: justify;\n\tflex-pack: justify;\n\tjustify-content: space-between;\n\theight: 3rem;\n\tbackground-color: #f0f3f6;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n'], ['\n\tdisplay: flex;\n\tbox-align: center;\n\tflex-align: center;\n\talign-items: center;\n\tbox-pack: justify;\n\tflex-pack: justify;\n\tjustify-content: space-between;\n\theight: 3rem;\n\tbackground-color: #f0f3f6;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var CardFooter = function CardFooter(props) {
	var children = props.children;


	return _react2.default.createElement(
		Container,
		props,
		children
	);
};

CardFooter.propTypes = {
	children: _propTypes2.default.node,
	className: _propTypes2.default.string
};

exports.default = CardFooter;