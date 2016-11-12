'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../utils/componentFeatures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MenuText = function MenuText(_ref) {
    var text = _ref.text;

    var props = _objectWithoutProperties(_ref, ['text']);

    return _react2.default.createElement(
        'li',
        { className: _componentFeatures.MenuText.getOuterClassNames(props, "menu-text") },
        text
    );
};
MenuText.propTypes = _componentFeatures.MenuText.getPropTypes({
    text: _react.PropTypes.string
});
MenuText.defaultProps = _componentFeatures.MenuText.getDefaultProps({
    text: null
});

exports.default = MenuText;