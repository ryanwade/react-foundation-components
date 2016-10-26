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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_React$Component) {
    _inherits(TextArea, _React$Component);

    function TextArea(props) {
        _classCallCheck(this, TextArea);

        return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));
    }

    _createClass(TextArea, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var label = _props.label;
            var value = _props.value;

            var props = _objectWithoutProperties(_props, ['label', 'value']);

            return _react2.default.createElement(
                'div',
                { className: _componentFeatures.TextArea.getOuterClassNames(props) },
                _react2.default.createElement(
                    'label',
                    null,
                    label,
                    _react2.default.createElement('textarea', _extends({
                        className: _componentFeatures.TextArea.getInnerClassNames(props),
                        value: value
                    }, _componentFeatures.TextArea.getAttrs(props)))
                )
            );
        }
    }]);

    return TextArea;
}(_react2.default.Component);

TextArea.propTypes = _componentFeatures.TextArea.getPropTypes({
    label: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.string
});
TextArea.defaultProps = _componentFeatures.TextArea.getDefaultProps({});

exports.default = TextArea;