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

var TextField = function TextField(_ref) {
    var props = _ref.props;
    return _react2.default.createElement(
        _InputField2.default,
        { className: _componentFeatures.TextField.getOuterClassNames(props), input: props },
        _react2.default.createElement('input', _extends({ className: _componentFeatures.TextField.getInnerClassNames(props),
            type: 'text'
        }, _componentFeatures.TextField.getAttrs(props)))
    );
};
TextField.propTypes = _componentFeatures.TextField.getPropTypes();
TextField.defaultProps = _componentFeatures.TextField.getDefaultProps();

exports.default = TextField;