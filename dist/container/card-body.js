'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tposition: relative;\n\tdisplay: flex;\n\tbox-pack: center;\n    flex-pack: center;\n    justify-content: center;\n\ttext-align: center;\n\tpadding-left: 1rem;\n\tpadding-top: 1rem;\n\tpadding-right: 1rem;\n\theight: 12rem;\n'], ['\n\tposition: relative;\n\tdisplay: flex;\n\tbox-pack: center;\n    flex-pack: center;\n    justify-content: center;\n\ttext-align: center;\n\tpadding-left: 1rem;\n\tpadding-top: 1rem;\n\tpadding-right: 1rem;\n\theight: 12rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    padding-top: 1rem;\n'], ['\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    padding-top: 1rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-weight: 400;\n    padding-top: 1.5rem;\n'], ['\n    font-weight: 400;\n    padding-top: 1.5rem;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    font-size: 1.125rem;\n    display: block;\n    width: 11.25rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 400;\n    margin: 0;\n    line-height: 1.2;\n'], ['\n    font-size: 1.125rem;\n    display: block;\n    width: 11.25rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 400;\n    margin: 0;\n    line-height: 1.2;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    font-size: 0.75rem;\n    display: block;\n    width: 11.25rem;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 400;\n    text-align: center;\n'], ['\n    font-size: 0.75rem;\n    display: block;\n    width: 11.25rem;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 400;\n    text-align: center;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    font-size: 0.75rem;\n    display: block;\n    width: 11.25rem;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 400;\n    padding: 0;\n    margin: 0;\n    color: #5a6872;\n'], ['\n    font-size: 0.75rem;\n    display: block;\n    width: 11.25rem;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 400;\n    padding: 0;\n    margin: 0;\n    color: #5a6872;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    display: flex;\n    box-align: center;\n    flex-align: center;\n    align-items: center;\n    box-pack: center;\n    flex-pack: center;\n    justify-content: center;\n    width: 3.125rem;\n    height: 3.125rem;\n    background-color: #fff;\n    border: 1px solid #dfe3e6;\n    border-radius: 100%;\n'], ['\n    display: flex;\n    box-align: center;\n    flex-align: center;\n    align-items: center;\n    box-pack: center;\n    flex-pack: center;\n    justify-content: center;\n    width: 3.125rem;\n    height: 3.125rem;\n    background-color: #fff;\n    border: 1px solid #dfe3e6;\n    border-radius: 100%;\n']);

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

var Body = _styledComponents2.default.div(_templateObject2);

var Title = _styledComponents2.default.div(_templateObject3);

var TitleName = _styledComponents2.default.p(_templateObject4);

var TitleLink = _styledComponents2.default.a(_templateObject5);

var TitleInfo = _styledComponents2.default.h4(_templateObject6);

var Icon = _styledComponents2.default.div(_templateObject7);

var CardBody = function CardBody(props) {
    var link = props.link,
        info = props.info,
        title = props.title,
        icon = props.icon;


    var cardLinkContent = props.link ? props.link.map(function (link, key) {
        return _react2.default.createElement(
            TitleLink,
            { key: key, href: link },
            link
        );
    }) : '';

    var cardInfoContent = props.info ? props.info.map(function (info, key) {
        return _react2.default.createElement(
            TitleInfo,
            { key: key },
            info
        );
    }) : '';

    var cardLinkContentArray = Object.keys(cardLinkContent);
    var cardInfoContentArray = Object.keys(cardInfoContent);

    return _react2.default.createElement(
        Container,
        props,
        props.children,
        _react2.default.createElement(
            Body,
            null,
            _react2.default.createElement(Icon, null),
            _react2.default.createElement(
                Title,
                null,
                _react2.default.createElement(
                    TitleName,
                    null,
                    props.title
                ),
                cardLinkContentArray.map(function (info, key) {
                    return cardLinkContent[key];
                }),
                cardInfoContentArray.map(function (info, key) {
                    return cardInfoContent[key];
                })
            )
        )
    );
};

CardBody.propTypes = {
    children: _propTypes2.default.node.isRequired,
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired,
    title: _propTypes2.default.string,
    link: _propTypes2.default.node,
    info: _propTypes2.default.array,
    className: _propTypes2.default.string
};

CardBody.defaultProps = {
    icon: '',
    title: ''
};

exports.default = CardBody;