'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../../utils/componentFeatures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ExpandTitle = function ExpandTitle(_ref) {
        var children = _ref.children;
        var show = _ref.show;

        var props = _objectWithoutProperties(_ref, ['children', 'show']);

        return _react2.default.createElement(
                'div',
                _extends({ className: _componentFeatures.ExpandTitle.getOuterClassNames(props, "row callout expand-content")
                }, _componentFeatures.ExpandTitle.getAttrs(props)),
                children,
                _react2.default.createElement(
                        'div',
                        { className: _componentFeatures.ExpandTitle.getInnerClassNames(props, "is-accordion-submenu-parent"),
                                'aria-expanded': show,
                                style: { position: 'absolute', bottom: '15px', right: '0px' } },
                        _react2.default.createElement('a', null)
                )
        );
};
ExpandTitle.propTypes = _componentFeatures.ExpandTitle.getPropTypes({
        children: _react.PropTypes.node,
        show: _react.PropTypes.bool
});
ExpandTitle.defaultProps = _componentFeatures.ExpandTitle.getDefaultProps();

exports.default = ExpandTitle;