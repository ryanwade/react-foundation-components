'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../utils/componentFeatures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Icon = function Icon(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return _react2.default.createElement('i', { className: _componentFeatures.Icon.getOuterClassNames(props) });
};
Icon.propTypes = _componentFeatures.Icon.getPropTypes();
Icon.defaultProps = _componentFeatures.Icon.getDefaultProps();

exports.default = Icon;