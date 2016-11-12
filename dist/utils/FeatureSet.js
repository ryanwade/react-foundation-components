'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FeatureSet = exports.Features = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _enums = require('./enums');

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
    InputField: "InputField",
    Alignment: "Alignment",
    Active: "Active",
    Orientation: "Orientation",
    ContentExpand: "ContentExpand",
    MenuStyle: "MenuStyle",
    RowStyle: "RowStyle",
    Icon: "Icon"
};

function oneOfList(obj) {
    return _react.PropTypes.oneOf(Object.keys(obj).map(function (key) {
        return obj[key];
    }));
}

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
            var _classNames;

            return (0, _classnames2.default)((_classNames = {
                extraClasses: extraClasses
            }, _defineProperty(_classNames, props.outerClassName, this.set[Features.ClassNames]), _defineProperty(_classNames, props.className, this.set[Features.ClassNames]), _defineProperty(_classNames, "show", this.set[Features.Visibility] && props.show), _defineProperty(_classNames, "hide", this.set[Features.Visibility] && !props.show), _defineProperty(_classNames, "float-" + props.float, this.set[Features.Float] && props.float), _defineProperty(_classNames, "align-" + props.alignment, this.set[Features.Alignment] && props.alignment), _defineProperty(_classNames, "active", this.set[Features.Active] && props.isActive), _defineProperty(_classNames, props.orientation, this.set[Features.Orientation]), _defineProperty(_classNames, "expanded", this.set[Features.ContentExpand] && props.isExpanded), _defineProperty(_classNames, "simple", this.set[Features.MenuStyle] && props.isSimple), _defineProperty(_classNames, "nested", this.set[Features.MenuStyle] && props.isNested), _defineProperty(_classNames, "icon-top", this.set[Features.MenuStyle] && props.iconTop), _defineProperty(_classNames, "fi-" + props.icon, this.set[Features.Icon] && props.icon), _classNames));
        }
    }, {
        key: 'getInnerClassNames',
        value: function getInnerClassNames(props, extraClasses) {
            var _classNames2;

            return (0, _classnames2.default)((_classNames2 = {
                extraClasses: extraClasses
            }, _defineProperty(_classNames2, props.innerClassName, this.set[Features.ClassNames]), _defineProperty(_classNames2, "input-group-field", this.set[Features.InputField] && props.isInline), _classNames2));
        }
    }, {
        key: 'getAttrs',
        value: function getAttrs(props) {
            return (0, _classnames2.default)({
                disabled: this.set[Features.Disabled] ? props.disabled : undefined,
                onClick: this.set[Features.MouseEvents] ? props.onClick : undefined,
                onChange: this.set[Features.DataEvents] ? props.onChange : undefined,
                value: this.set[Features.InputField] ? props.value : undefined
            });
        }
    }, {
        key: 'getPropTypes',
        value: function getPropTypes() {
            var propTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return Object.assign(propTypes, {
                outerClassName: this.set[Features.ClassNames] ? _react.PropTypes.string : undefined,
                innerClassName: this.set[Features.ClassNames] ? _react.PropTypes.string : undefined,
                show: this.set[Features.Visibility] ? _react.PropTypes.bool : undefined,
                float: this.set[Features.Float] ? oneOfList(_enums.Alignment) : undefined,
                disabled: this.set[Features.Disabled] ? _react.PropTypes.bool : undefined,
                onClick: this.set[Features.MouseEvents] ? _react.PropTypes.func : undefined,
                onChange: this.set[Features.DataEvents] ? _react.PropTypes.func : undefined,
                value: this.set[Features.InputField] ? this.set[Features.InputField] : undefined,
                label: this.set[Features.InputField] ? _react.PropTypes.string : undefined,
                isInline: this.set[Features.InputField] ? _react.PropTypes.bool : undefined,
                alignment: this.set[Features.Alignment] ? oneOfList(_enums.Alignment) : undefined,
                isActive: this.set[Features.Active] ? _react.PropTypes.bool : undefined,
                orientation: this.set[Features.Orientation] ? oneOfList(_enums.Orientation) : undefined,
                isExpanded: this.set[Features.ContentExpand] ? _react.PropTypes.bool : undefined,
                isSimple: this.set[Features.MenuStyle] ? _react.PropTypes.bool : undefined,
                isNested: this.set[Features.MenuStyle] ? _react.PropTypes.bool : undefined,
                iconTop: this.set[Features.MenuStyle] ? _react.PropTypes.bool : undefined,
                icon: this.set[Features.Icon] ? _react.PropTypes.string : undefined
            });
        }
    }, {
        key: 'getDefaultProps',
        value: function getDefaultProps() {
            var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return Object.assign(defaultProps, {
                show: this.set[Features.Visibility] ? true : undefined,
                float: this.set[Features.Float] ? _enums.Alignment.None : undefined,
                disabled: this.set[Features.Disabled] ? false : undefined,
                isInline: this.set[Features.InputField] ? false : undefined,
                label: this.set[Features.InputField] ? null : undefined,
                alignment: this.set[Features.Alignment] ? _enums.Alignment.None : undefined,
                isActive: this.set[Features.Active] ? false : undefined,
                orientation: this.set[Features.Orientation] ? _enums.Orientation.Default : undefined,
                isExpanded: this.set[Features.ContentExpand] ? false : undefined,
                isSimple: this.set[Features.MenuStyle] ? false : undefined,
                isNested: this.set[Features.MenuStyle] ? false : undefined,
                iconTop: this.set[Features.MenuStyle] ? false : undefined,
                icon: this.set[Features.Icon] ? null : undefined
            });
        }
    }]);

    return FeatureSet;
}();