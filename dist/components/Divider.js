'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentFeatures = require('../utils/componentFeatures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Divider = function Divider(_ref) {
    var height = _ref.height;
    var line = _ref.line;

    var props = _objectWithoutProperties(_ref, ['height', 'line']);

    if (line) {
        return _react2.default.createElement(
            'div',
            { className: _componentFeatures.Divider.getClassNames(props) },
            _react2.default.createElement('div', { style: { height: height + 'px' } }),
            _react2.default.createElement('hr', null),
            _react2.default.createElement('div', { style: { height: height + 'px' } })
        );
    }
    return _react2.default.createElement(
        'div',
        { className: _componentFeatures.Divider.getClassNames(props) },
        _react2.default.createElement('div', { style: { height: height + 'px' } })
    );
};
Divider.propTypes = _componentFeatures.Divider.getPropTypes({
    height: _react.PropTypes.number,
    line: _react.PropTypes.bool
});
Divider.defaultProps = _componentFeatures.Divider.getDefaultProps({
    height: 25,
    line: false
});

exports.default = Divider;