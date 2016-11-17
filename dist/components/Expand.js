'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../utils/componentFeatures');

var _Title = require('./Expand/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Content = require('./Expand/Content');

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Expand = function (_React$Component) {
    _inherits(Expand, _React$Component);

    function Expand(props) {
        _classCallCheck(this, Expand);

        var _this = _possibleConstructorReturn(this, (Expand.__proto__ || Object.getPrototypeOf(Expand)).call(this, props));

        _this.toggleShow = _this.toggleShow.bind(_this);
        return _this;
    }

    _createClass(Expand, [{
        key: 'toggleShow',
        value: function toggleShow() {
            var _ref = this.state || {},
                _ref$show = _ref.show,
                show = _ref$show === undefined ? false : _ref$show;

            this.setState({
                show: !show
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                content = _props.content,
                props = _objectWithoutProperties(_props, ['title', 'content']);

            var _ref2 = this.state || {},
                _ref2$show = _ref2.show,
                show = _ref2$show === undefined ? false : _ref2$show;

            return _react2.default.createElement(
                'div',
                { className: _componentFeatures.Expand.getClassNames(props, "expand") },
                _react2.default.createElement(
                    _Title2.default,
                    { onClick: this.toggleShow, show: show },
                    title
                ),
                _react2.default.createElement(
                    _Content2.default,
                    { show: show },
                    content
                )
            );
        }
    }]);

    return Expand;
}(_react2.default.Component);

Expand.propTypes = _componentFeatures.Expand.getPropTypes({
    title: _react.PropTypes.node.isRequired,
    content: _react.PropTypes.node.isRequired
});
Expand.defaultProps = _componentFeatures.Expand.getDefaultProps();

exports.default = Expand;