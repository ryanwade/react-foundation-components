'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FeatureSet = function () {
    function FeatureSet() {
        var features = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, FeatureSet);

        this.features = features;

        this.getClassNames = this.getClassNames.bind(this);
        this.getAttrs = this.getAttrs.bind(this);
        this.getDefaultProps = this.getDefaultProps.bind(this);
        this.getPropTypes = this.getPropTypes.bind(this);
    }

    _createClass(FeatureSet, [{
        key: 'getClassNames',
        value: function getClassNames(ref, extraClasses) {
            var myClassNames = (0, _classnames2.default)(ref.props.classNames, extraClasses);
            if (this.features.Visibility) {
                myClassNames = (0, _classnames2.default)(myClassNames, {
                    "show": ref.props.show,
                    "hide": !ref.props.show
                });
            }
            if (this.features.Float) {
                myClassNames = (0, _classnames2.default)(myClassNames, _defineProperty({}, "float-" + ref.props.float, ref.props.float));
            }
            return myClassNames;
        }
    }, {
        key: 'getAttrs',
        value: function getAttrs(ref) {
            var attrs = {};
            if (this.feature.Disabled) {
                attrs.disabled = ref.props.disabled;
            }
            if (this.feature.MouseEvents) {
                attrs.onClick = ref.props.onClick;
            }
            return attrs;
        }
    }, {
        key: 'getPropTypes',
        value: function getPropTypes(propTypes) {
            propTypes.ClassNames = _react.PropTypes.string;
            if (this.features.Visibility) {
                propTypes.show = _react.PropTypes.bool;
            }
            if (this.features.Float) {
                propTypes.float = _react.PropTypes.string;
            }
            if (this.features.Disabled) {
                propTypes.disabled = _react.PropTypes.bool;
            }
            if (this.features.MouseEvents) {
                propTypes.onClick = _react.PropTypes.func;
            }
            return propTypes;
        }
    }, {
        key: 'getDefaultProps',
        value: function getDefaultProps(defaultProps) {
            defaultProps.ClassNames = "";
            if (this.features.Visibility) {
                defaultProps.show = true;
            }
            if (this.features.Float) {
                defaultProps.float = null;
            }
            if (this.features.disabled) {
                defaultProps.disabled = false;
            }
            return defaultProps;
        }
    }]);

    return FeatureSet;
}();

exports.default = FeatureSet;