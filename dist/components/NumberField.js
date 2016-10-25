'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../utils/componentFeatures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberField = function (_React$Component) {
    _inherits(NumberField, _React$Component);

    function NumberField(props) {
        _classCallCheck(this, NumberField);

        return _possibleConstructorReturn(this, (NumberField.__proto__ || Object.getPrototypeOf(NumberField)).call(this, props));
    }

    _createClass(NumberField, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var label = _props.label;
            var value = _props.value;
            var max = _props.max;

            return _react2.default.createElement(
                'div',
                { className: _componentFeatures.NumberField.getClassNames(this) },
                _react2.default.createElement(
                    'label',
                    null,
                    label,
                    _react2.default.createElement('input', _extends({ className: 'input-group-field',
                        type: 'number',
                        value: value,
                        min: 1,
                        max: max
                    }, _componentFeatures.NumberField.getAttrs(this)))
                )
            );
        }
    }]);

    return NumberField;
}(_react2.default.Component);

NumberField.propTypes = _componentFeatures.NumberField.getPropTypes({
    label: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.number,
    max: _react.PropTypes.number
});
NumberField.defaultProps = _componentFeatures.NumberField.getDefaultProps({
    value: 0
});

exports.default = NumberField;