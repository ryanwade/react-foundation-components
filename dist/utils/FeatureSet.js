'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FeatureSet = exports.Features = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Features = exports.Features = {
    ClassNames: "ClassNames",
    Visibility: "Visibility",
    Disabled: "Disabled",
    MouseEvents: "MouseEvents",
    Float: "Float"
};

var FeatureSet = exports.FeatureSet = function () {
    function FeatureSet() {
        var set = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, FeatureSet);

        this.set = set;

        this.getClassNames = this.getClassNames.bind(this);
        this.getAttrs = this.getAttrs.bind(this);
        this.getDefaultProps = this.getDefaultProps.bind(this);
        this.getPropTypes = this.getPropTypes.bind(this);
    }

    _createClass(FeatureSet, [{
        key: 'getClassNames',
        value: function getClassNames(ref, extraClasses) {
            var myClassNames = extraClasses;
            if (this.set[Features.ClassNames]) {
                (0, _classnames2.default)(myClassNames, ref.props.className);
            }
            if (this.set[Features.Visibility]) {
                myClassNames = (0, _classnames2.default)(myClassNames, {
                    "show": ref.props.show,
                    "hide": !ref.props.show
                });
            }
            if (this.set[Features.Float]) {
                myClassNames = (0, _classnames2.default)(myClassNames, _defineProperty({}, "float-" + ref.props.float, ref.props.float));
            }
            return myClassNames;
        }
    }, {
        key: 'getAttrs',
        value: function getAttrs(ref) {
            var attrs = {};
            if (this.feature[Features.Disabled]) {
                attrs.disabled = ref.props.disabled;
            }
            if (this.feature[Features.MouseEvents]) {
                attrs.onClick = ref.props.onClick;
            }
            return attrs;
        }
    }, {
        key: 'getPropTypes',
        value: function getPropTypes() {
            var propTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (this.set[Features.ClassNames]) {
                propTypes.className = _react.PropTypes.string;
            }
            if (this.set[Features.Visibility]) {
                propTypes.show = _react.PropTypes.bool;
            }
            if (this.set[Features.Float]) {
                propTypes.float = _react.PropTypes.string;
            }
            if (this.set[Features.Disabled]) {
                propTypes.disabled = _react.PropTypes.bool;
            }
            if (this.set[Features.MouseEvents]) {
                propTypes.onClick = _react.PropTypes.func;
            }
            return propTypes;
        }
    }, {
        key: 'getDefaultProps',
        value: function getDefaultProps(defaultProps) {
            if (this.set[Features.Visibility]) {
                defaultProps.show = true;
            }
            if (this.set[Features.Float]) {
                defaultProps.float = null;
            }
            if (this.set[Features.Disabled]) {
                defaultProps.disabled = false;
            }
            return defaultProps;
        }
    }]);

    return FeatureSet;
}();