'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _componentFeatures = require('../utils/componentFeatures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref, context) {
    var color = _ref.color,
        label = _ref.label,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ['color', 'label', 'children']);

    return _react2.default.createElement(
        'button',
        _extends({ type: 'button',
            className: _componentFeatures.Button.getClassNames(props, (0, _classnames2.default)("button", color))
        }, _componentFeatures.Button.getAttrs(props, context)),
        label || children
    );
};
Button.propTypes = _componentFeatures.Button.getPropTypes({
    color: _react.PropTypes.string,
    label: _react.PropTypes.string,
    children: _react.PropTypes.node
});
Button.defaultProps = _componentFeatures.Button.getDefaultProps();
Button.contextTypes = _componentFeatures.Button.getContextTypes();

exports.default = Button;