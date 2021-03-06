'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../utils/componentFeatures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Menu = function Menu(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(
        'ul',
        { className: _componentFeatures.Menu.getClassNames(props, "menu") },
        children
    );
};
Menu.propTypes = _componentFeatures.Menu.getPropTypes({
    children: _react.PropTypes.node
});
Menu.defaultProps = _componentFeatures.Menu.getDefaultProps();

exports.default = Menu;