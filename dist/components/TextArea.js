'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../utils/componentFeatures');

var _InputField = require('./InputField');

var _InputField2 = _interopRequireDefault(_InputField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TextArea = function TextArea(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return _react2.default.createElement(
        _InputField2.default,
        { className: _componentFeatures.TextArea.getClassNames(props), input: props },
        _react2.default.createElement('textarea', _extends({ className: _componentFeatures.TextArea.getInnerClassNames(props)
        }, _componentFeatures.TextArea.getAttrs(props)))
    );
};
TextArea.propTypes = _componentFeatures.TextArea.getPropTypes();
TextArea.defaultProps = _componentFeatures.TextArea.getDefaultProps();

exports.default = TextArea;