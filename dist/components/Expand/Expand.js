'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../../utils/componentFeatures');

var _ExpandTitle = require('./ExpandTitle.js');

var _ExpandTitle2 = _interopRequireDefault(_ExpandTitle);

var _ExpandContent = require('./ExpandContent.js');

var _ExpandContent2 = _interopRequireDefault(_ExpandContent);

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

        _this.renderChildren = _this.renderChildren.bind(_this);
        return _this;
    }

    _createClass(Expand, [{
        key: 'renderChildren',
        value: function renderChildren(children) {
            var _this2 = this;

            var _ref = this.state || {};

            var _ref$show = _ref.show;
            var show = _ref$show === undefined ? false : _ref$show;


            return _react2.default.Children.map(children, function (child) {
                if (child.type === _ExpandTitle2.default) {
                    //set show state on ExpandTitle
                    return _react2.default.cloneElement(child, {
                        onClick: function onClick() {
                            _this2.setState({ show: !show });
                        },
                        show: show
                    });
                } else if (child.type === _ExpandContent2.default) {
                    //set Visibility on ExpandContent
                    return _react2.default.cloneElement(child, {
                        show: show
                    });
                } else {
                    return child;
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;

            var props = _objectWithoutProperties(_props, ['children']);

            return _react2.default.createElement(
                'div',
                { className: _componentFeatures.Expand.getOuterClassNames(props, "expand") },
                this.renderChildren(children)
            );
        }
    }]);

    return Expand;
}(_react2.default.Component);

Expand.propTypes = _componentFeatures.Expand.getPropTypes({
    children: _react.PropTypes.node
});
Expand.defaultProps = _componentFeatures.Expand.getDefaultProps();

exports.default = Expand;