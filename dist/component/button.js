'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    color: ', ';\n\t', '    \n'], ['\n    color: ', ';\n\t', '    \n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject, _variables.color.base, function (props) {
    return props.primary && '\n        background: white;\n        color: palevioletred;\n    ';
});

Object.assign(Button, {
    displayName: 'Button',
    propTypes: {
        label: _propTypes2.default.string.isRequired,
        style: _propTypes2.default.object,
        disabled: _propTypes2.default.bool,
        onClick: _propTypes2.default.func
    }
});

exports.default = Button;