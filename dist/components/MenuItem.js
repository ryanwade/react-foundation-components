'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../utils/componentFeatures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MenuItem = function MenuItem(_ref) {
    var label = _ref.label;
    var icon = _ref.icon;

    var props = _objectWithoutProperties(_ref, ['label', 'icon']);

    return _react2.default.createElement(
        'li',
        { className: _componentFeatures.MenuItem.getClassNames(props) },
        _react2.default.createElement(
            'a',
            { href: '#' },
            icon,
            _react2.default.createElement(
                'span',
                null,
                label
            )
        )
    );
};
MenuItem.propTypes = _componentFeatures.MenuItem.getPropTypes({
    label: _react.PropTypes.string,
    icon: _react.PropTypes.node
});
MenuItem.defaultProps = _componentFeatures.MenuItem.getDefaultProps({
    label: null
});

exports.default = MenuItem;