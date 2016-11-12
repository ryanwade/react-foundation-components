'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../utils/componentFeatures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Title = function Title(_ref) {
    var text = _ref.text;

    var props = _objectWithoutProperties(_ref, ['text']);

    return _react2.default.createElement(
        'h3',
        { className: _componentFeatures.Title.getOuterClassNames(props, "title-font") },
        text
    );
};
Title.propTypes = _componentFeatures.Title.getPropTypes({
    text: _react.PropTypes.string.isRequired
});
Title.defaultProps = _componentFeatures.Title.getDefaultProps();

exports.default = Title;