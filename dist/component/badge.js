'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.APPEARANCE_ENUM = exports.THEME_MODES = exports.DEFAULT_THEME_MODE = exports.CHANNEL = exports.FLATTENED = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    font-family: ', ';\n    font-size:', ';\n    background-color: ', ';\n    border-radius: 2px;\n    color: ', ';\n    display: inline-block;\n    font-weight: normal;\n    line-height: 1;\n    min-width: 1px;\n    padding: 0.3em 0.5em 0.362em;\n    text-align: center;\n'], ['\n    font-family: ', ';\n    font-size:', ';\n    background-color: ', ';\n    border-radius: 2px;\n    color: ', ';\n    display: inline-block;\n    font-weight: normal;\n    line-height: 1;\n    min-width: 1px;\n    padding: 0.3em 0.5em 0.362em;\n    text-align: center;\n']);

exports.getTheme = getTheme;
exports.themed = themed;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/types.js?at=master&fileviewer=file-view-default


// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/constants.js?at=master&fileviewer=file-view-default


// import { backgroundColor, textColor } from '../theme';


// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/types.js?at=master&fileviewer=file-view-default
var FLATTENED = exports.FLATTENED = '__FLATTENED__';
var CHANNEL = exports.CHANNEL = '__ATLASKIT_THEME__';
var DEFAULT_THEME_MODE = exports.DEFAULT_THEME_MODE = 'light';
var THEME_MODES = exports.THEME_MODES = ['light', 'dark'];
// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/constants.js?at=master&fileviewer=file-view-default


// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/utils/getTheme.js?at=master&fileviewer=file-view-default
// import { CHANNEL, DEFAULT_THEME_MODE } from '../constants';
// import { type Theme, type ThemeProps } from '../types';
var defaultTheme = { mode: DEFAULT_THEME_MODE };

function getTheme(props) {
    return props && props.theme && props.theme[CHANNEL] ? props.theme[CHANNEL] : defaultTheme;
}
// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/utils/getTheme.js?at=master&fileviewer=file-view-default


// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/utils/themed.js?at=master&fileviewer=file-view-default
// import getTheme from './getTheme';
// import { type ThemedValue, type ThemeProps } from '../types';

function themedVariants(variantProp, variants) {
    return function (props) {
        var theme = getTheme(props);
        if (props && props[variantProp] && variants) {
            var modes = variants[props[variantProp]];
            if (modes) {
                return modes[theme.mode];
            }
        }
        return '';
    };
}

function themed(modesOrVariant, variantModes) {
    if (typeof modesOrVariant === 'string') {
        return themedVariants(modesOrVariant, variantModes);
    }
    var modes = modesOrVariant;
    return function (props) {
        var theme = getTheme(props);
        return modes[theme.mode];
    };
}
// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/utils/themed.js?at=master&fileviewer=file-view-default


// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/badge/src/theme.js?at=master&fileviewer=file-view-default
// https://ak-mk-2-prod.netlify.com/mk-2/packages/elements/theme
// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/colors.js?at=master&fileviewer=file-view-default
var backgroundColor = themed('appearance', {
    added: { light: '#E3FCEF', dark: '#E3FCEF' },
    default: { light: '#EBECF0', dark: '#3B475C' },
    important: { light: '#FF5630', dark: '#FF5630' },
    primary: { light: '#0052CC', dark: '#4C9AFF' },
    /* Note that primary inverted is a temporary implementation. Once navigation has
    context of the nav location to pass down, this will be moved to the primary when
    viewed in a global context. */
    primaryInverted: { light: '#FFFFFF', dark: '#9FB0CC' },
    removed: { light: '#FFEBE6', dark: '#FFEBE6' }
});

var textColor = themed('appearance', {
    added: { light: '#006644', dark: '#006644' },
    default: { light: '#172B4D', dark: '#E6EDFA' },
    important: { light: '#FFFFFF', dark: '#FFFFFF' },
    primary: { light: '#FFFFFF', dark: '#0D1424' },
    primaryInverted: { light: '#0747A6', dark: '#0D1424' },
    removed: { light: '#BF2600', dark: '#BF2600' }
});

var APPEARANCE_ENUM = exports.APPEARANCE_ENUM = {
    values: ['default', 'primary', 'primaryInverted', 'important', 'added', 'removed'],
    defaultValue: 'default'
};

function validAppearance(value) {
    return value && APPEARANCE_ENUM.values.includes(value) ? value : APPEARANCE_ENUM.defaultValue;
}

function getValue(value, max) {
    if (value < 0) {
        return '0';
    }
    if (max > 0 && value > max) {
        return max + '+';
    }
    if (value === Infinity) {
        return '\u221E'; // ∞ inifinity character
    }
    return String(value);
}

var Container = _styledComponents2.default.div(_templateObject, _variables.font.family, _variables.font.size.normal, backgroundColor, textColor);

var Badge = function (_PureComponent) {
    _inherits(Badge, _PureComponent);

    function Badge() {
        _classCallCheck(this, Badge);

        return _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
    }

    _createClass(Badge, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            var _props = this.props,
                onValueUpdated = _props.onValueUpdated,
                oldValue = _props.value;
            var newValue = nextProps.value;


            if (onValueUpdated && newValue !== oldValue) {
                onValueUpdated({ oldValue: oldValue, newValue: newValue });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                appearance = _props2.appearance,
                max = _props2.max,
                value = _props2.value;


            return _react2.default.createElement(
                Container,
                { appearance: validAppearance(appearance) },
                getValue(value, max)
            );
        }
    }]);

    return Badge;
}(_react.PureComponent);

Badge.defaultProps = {
    appearance: 'default',
    max: 99,
    value: 0
};
exports.default = Badge;