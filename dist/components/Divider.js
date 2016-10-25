'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../utils/componentFeatures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Divider = function (_React$Component) {
    _inherits(Divider, _React$Component);

    function Divider(props) {
        _classCallCheck(this, Divider);

        return _possibleConstructorReturn(this, (Divider.__proto__ || Object.getPrototypeOf(Divider)).call(this, props));
    }

    _createClass(Divider, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var height = _props.height;
            var line = _props.line;

            if (line) {
                return _react2.default.createElement(
                    'div',
                    { className: _componentFeatures.Divider.getClassNames(this) },
                    _react2.default.createElement('div', { style: { height: height + 'px' } }),
                    _react2.default.createElement('hr', null),
                    _react2.default.createElement('div', { style: { height: height + 'px' } })
                );
            }
            return _react2.default.createElement(
                'div',
                { className: _componentFeatures.Divider.getClassNames(this) },
                _react2.default.createElement('div', { style: { height: height + 'px' } })
            );
        }
    }]);

    return Divider;
}(_react2.default.Component);

Divider.propTypes = _componentFeatures.Divider.getPropTypes({
    height: _react.PropTypes.number,
    line: _react.PropTypes.bool
});
Divider.defaultProps = _componentFeatures.Divider.getDefaultProps({
    height: 25,
    line: false
});

exports.default = Divider;