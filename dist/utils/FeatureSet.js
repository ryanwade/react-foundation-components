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
    DataEvents: "DataEvents",
    Float: "Float",
    InputField: "InputField"
};

var FeatureSet = exports.FeatureSet = function () {
    function FeatureSet() {
        var set = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, FeatureSet);

        this.set = set;

        this.getOuterClassNames = this.getOuterClassNames.bind(this);
        this.getInnerClassNames = this.getInnerClassNames.bind(this);
        this.getAttrs = this.getAttrs.bind(this);
        this.getDefaultProps = this.getDefaultProps.bind(this);
        this.getPropTypes = this.getPropTypes.bind(this);
    }

    _createClass(FeatureSet, [{
        key: 'getOuterClassNames',
        value: function getOuterClassNames(props, extraClasses) {
            var outerClassNames = extraClasses;
            if (this.set[Features.ClassNames]) {
                outerClassNames = (0, _classnames2.default)(outerClassNames, props.outerClassName, props.className);
            }
            if (this.set[Features.Visibility]) {
                outerClassNames = (0, _classnames2.default)(outerClassNames, {
                    "show": props.show,
                    "hide": !props.show
                });
            }
            if (this.set[Features.Float]) {
                outerClassNames = (0, _classnames2.default)(outerClassNames, _defineProperty({}, "float-" + props.float, props.float));
            }
            return outerClassNames;
        }
    }, {
        key: 'getInnerClassNames',
        value: function getInnerClassNames(props, extraClasses) {
            var innerClassNames = extraClasses;
            if (this.set[Features.ClassNames]) {
                innerClassNames = (0, _classnames2.default)(innerClassNames, props.innerClassName);
            }
            if (this.set[Features.InputField] && props.isInline) {
                innerClassNames = (0, _classnames2.default)(innerClassNames, "input-group-field");
            }
            return innerClassNames;
        }
    }, {
        key: 'getAttrs',
        value: function getAttrs(props) {
            var attrs = {};
            if (this.set[Features.Disabled]) {
                attrs.disabled = props.disabled;
            }
            if (this.set[Features.MouseEvents]) {
                attrs.onClick = props.onClick;
            }
            if (this.set[Features.DataEvents]) {
                attrs.onChange = props.onChange;
            }
            if (this.set[Features.InputField]) {
                attrs.value = props.value;
            }
            return attrs;
        }
    }, {
        key: 'getPropTypes',
        value: function getPropTypes() {
            var propTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (this.set[Features.ClassNames]) {
                propTypes.outerClassName = _react.PropTypes.string;
                propTypes.innerClassName = _react.PropTypes.string;
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
            if (this.set[Features.DataEvents]) {
                propTypes.onChange = _react.PropTypes.func;
            }
            if (this.set[Features.InputField]) {
                propTypes.value = this.set[Features.InputField];
                propTypes.label = _react.PropTypes.string;
                propTypes.isInline = _react.PropTypes.bool;
            }
            return propTypes;
        }
    }, {
        key: 'getDefaultProps',
        value: function getDefaultProps() {
            var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (this.set[Features.Visibility]) {
                defaultProps.show = true;
            }
            if (this.set[Features.Float]) {
                defaultProps.float = null;
            }
            if (this.set[Features.Disabled]) {
                defaultProps.disabled = false;
            }
            if (this.set[Features.InputField]) {
                defaultProps.isInline = false;
                defaultProps.label = false;
            }
            return defaultProps;
        }
    }]);

    return FeatureSet;
}();