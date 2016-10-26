'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputField = function (_React$Component) {
    _inherits(InputField, _React$Component);

    function InputField(props) {
        _classCallCheck(this, InputField);

        return _possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).call(this, props));
    }

    _createClass(InputField, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var input = _props.input;
            var className = _props.className;
            var children = _props.children;

            if (input.isInline) {
                //children.className="input-group-field" applied on Feature.InputField & props.isInline
                return _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)(className, 'input-group') },
                    _react2.default.createElement(
                        'span',
                        { className: 'input-group-label' },
                        input.label
                    ),
                    children
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: className },
                    _react2.default.createElement(
                        'label',
                        null,
                        input.label,
                        children
                    )
                );
            }
        }
    }]);

    return InputField;
}(_react2.default.Component);

InputField.propTypes = {
    input: _react.PropTypes.object.isRequired,
    className: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.node.isRequired
};

exports.default = InputField;