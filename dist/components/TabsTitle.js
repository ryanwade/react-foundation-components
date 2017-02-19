'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../utils/componentFeatures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TabsTitle = function TabsTitle(_ref) {
    var label = _ref.label,
        props = _objectWithoutProperties(_ref, ['label']);

    return _react2.default.createElement(
        'ul',
        { className: _componentFeatures.TabsTitle.getClassNames(props, "tabs-title") },
        label
    );
};
TabsTitle.propTypes = _componentFeatures.TabsTitle.getPropTypes();
TabsTitle.defaultProps = _componentFeatures.TabsTitle.getDefaultProps();

exports.default = TabsTitle;