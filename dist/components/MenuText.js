'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../utils/componentFeatures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuText = function (_React$Component) {
    _inherits(MenuText, _React$Component);

    function MenuText(props) {
        _classCallCheck(this, MenuText);

        return _possibleConstructorReturn(this, (MenuText.__proto__ || Object.getPrototypeOf(MenuText)).call(this, props));
    }

    _createClass(MenuText, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var text = _props.text;

            var props = _objectWithoutProperties(_props, ['text']);

            return _react2.default.createElement(
                'li',
                { className: _componentFeatures.MenuText.getOuterClassNames(props, "menu-text") },
                text
            );
        }
    }]);

    return MenuText;
}(_react2.default.Component);

MenuText.propTypes = _componentFeatures.MenuText.getPropTypes({
    text: _react.PropTypes.string
});
MenuText.defaultProps = _componentFeatures.MenuText.getDefaultProps({
    text: null
});

exports.default = MenuText;