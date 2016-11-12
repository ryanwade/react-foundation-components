'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../../utils/componentFeatures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ExpandContent = function ExpandContent(_ref) {
    var children = _ref.children;

    var props = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(
        'div',
        { className: _componentFeatures.ExpandContent.getOuterClassNames(props, "row callout expand-content") },
        children
    );
};
ExpandContent.propTypes = _componentFeatures.ExpandContent.getPropTypes({
    children: _react.PropTypes.node
});
ExpandContent.defaultProps = _componentFeatures.ExpandContent.getDefaultProps();

exports.default = ExpandContent;