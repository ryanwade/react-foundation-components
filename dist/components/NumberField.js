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

var NumberField = function NumberField(_ref) {
    var max = _ref.max,
        props = _objectWithoutProperties(_ref, ['max']);

    return _react2.default.createElement(
        _InputField2.default,
        { className: _componentFeatures.NumberField.getClassNames(props), input: props },
        _react2.default.createElement('input', _extends({ className: _componentFeatures.NumberField.getInnerClassNames(props),
            type: 'number',
            min: 1,
            max: max
        }, _componentFeatures.NumberField.getAttrs(props)))
    );
};
NumberField.propTypes = _componentFeatures.NumberField.getPropTypes({
    max: _react.PropTypes.number
});
NumberField.defaultProps = _componentFeatures.NumberField.getDefaultProps();

exports.default = NumberField;