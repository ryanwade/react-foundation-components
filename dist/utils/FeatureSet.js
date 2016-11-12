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

var _values2 = require('lodash/values');

var _values3 = _interopRequireDefault(_values2);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _assign2 = require('lodash/assign');

var _assign3 = _interopRequireDefault(_assign2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _size2 = require('lodash/size');

var _size3 = _interopRequireDefault(_size2);

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
        ColumnStyle: "ColumnStyle",
        Icon: "Icon",
        Gutters: "Gutters"
};

function oneOfList(obj) {
        return _react.PropTypes.oneOf((0, _values3.default)(obj));
}
function append(n) {
        return n ? "-" + n : "";
}
function mediaToClass(size, txt, n) {
        if ((0, _isString3.default)(size)) return size + append(txt) + append(n);
        if ((0, _isArray3.default)(size)) return (0, _classnames2.default)((0, _map3.default)(size, function (s) {
                return mediaToClass(s, txt, n);
        }));
}
function pairToClass(arr) {
        if (!(0, _isArray3.default)(arr)) return null;
        if ((0, _size3.default)(arr) == 2 && (0, _isString3.default)(arr[1])) return mediaToClass(arr[0], "offset", arr[1]);
        if ((0, _isArray3.default)(arr[0])) return (0, _classnames2.default)((0, _map3.default)(arr, function (pair) {
                return pairToClass(pair);
        }));
}

var FeatureSet = exports.FeatureSet = function () {
        function FeatureSet() {
                var set = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                _classCallCheck(this, FeatureSet);

                this.set = set;

                this.getClassNames = this.getClassNames.bind(this);
                this.getInnerClassNames = this.getInnerClassNames.bind(this);
                this.getAttrs = this.getAttrs.bind(this);
                this.getDefaultProps = this.getDefaultProps.bind(this);
                this.getPropTypes = this.getPropTypes.bind(this);
        }

        _createClass(FeatureSet, [{
                key: 'getClassNames',
                value: function getClassNames(props, extraClasses) {
                        var _classes$push6, _classes$push7;

                        var classes = [_defineProperty({}, extraClasses, (0, _isString3.default)(extraClasses))];
                        if (this.set[Features.ClassNames]) classes.push(_defineProperty({}, props.className, (0, _isString3.default)(props.className)));
                        if (this.set[Features.Visibility]) classes.push({
                                "show": props.show === true,
                                "hide": props.show === false
                        });
                        if (this.set[Features.Float]) classes.push(_defineProperty({}, "float-" + props.float, (0, _isString3.default)(props.float)));
                        if (this.set[Features.Alignment]) classes.push(_defineProperty({}, "align-" + props.alignment, (0, _isString3.default)(props.alignment)));
                        if (this.set[Features.Active]) classes.push({
                                "active": props.isActive === true
                        });
                        if (this.set[Features.Orientation]) classes.push(_defineProperty({}, props.orientation, !(0, _isUndefined3.default)(props.orientation)));
                        if (this.set[Features.ContentExpand]) classes.push({
                                "expanded": props.isExpanded === true
                        });
                        if (this.set[Features.MenuStyle]) classes.push({
                                "simple": props.isSimple === true,
                                "nested": props.isNested === true,
                                "icon-top": props.iconTop === true
                        });
                        if (this.set[Features.Icon]) classes.push(_defineProperty({}, "fi-" + props.icon, (0, _isString3.default)(props.icon)));
                        if (this.set[Features.RowStyle]) classes.push({
                                "row": true,
                                "column": props.isColumn === true
                        });
                        if (this.set[Features.ColumnStyle]) classes.push((_classes$push6 = {}, _defineProperty(_classes$push6, _enums.Size.Small + "-" + props.small, !(0, _isUndefined3.default)(props.small)), _defineProperty(_classes$push6, _enums.Size.Medium + "-" + props.medium, !(0, _isUndefined3.default)(props.medium)), _defineProperty(_classes$push6, _enums.Size.Large + "-" + props.large, !(0, _isUndefined3.default)(props.large)), _defineProperty(_classes$push6, _enums.Size.XLarge + "-" + props.xlarge, !(0, _isUndefined3.default)(props.xlarge)), _defineProperty(_classes$push6, _enums.Size.XXLarge + "-" + props.xxlarge, !(0, _isUndefined3.default)(props.xxlarge)), _defineProperty(_classes$push6, pairToClass(props.offsetOn), (0, _isArray3.default)(props.offsetOn)), _defineProperty(_classes$push6, "columns", true), _classes$push6));
                        if (this.set[Features.Gutters]) classes.push((_classes$push7 = {}, _defineProperty(_classes$push7, _enums.Gutters.Collapse, props.collapse === true), _defineProperty(_classes$push7, mediaToClass(props.collapseOn, _enums.Gutters.Collapse), !(0, _isUndefined3.default)(props.collapseOn)), _defineProperty(_classes$push7, mediaToClass(props.uncollapseOn, _enums.Gutters.Uncollapse), !(0, _isUndefined3.default)(props.uncollapseOn)), _classes$push7));
                        return (0, _classnames2.default)(classes);
                }
        }, {
                key: 'getInnerClassNames',
                value: function getInnerClassNames(props, extraClasses) {
                        var classes = [_defineProperty({}, extraClasses, (0, _isString3.default)(extraClasses))];
                        if (this.set[Features.ClassNames]) classes.push(_defineProperty({}, props.innerClassName, (0, _isString3.default)(props.innerClassName)));
                        if (this.set[Features.InputField]) classes.push({
                                "input-group-field": props.isInline === true
                        });
                        return (0, _classnames2.default)(classes);
                }
        }, {
                key: 'getAttrs',
                value: function getAttrs(props) {
                        var attrs = {};
                        if (this.set[Features.Disabled]) (0, _assign3.default)(attrs, {
                                disabled: props.disabled
                        });
                        if (this.set[Features.MouseEvents]) (0, _assign3.default)(attrs, {
                                onClick: props.onClick
                        });
                        if (this.set[Features.DataEvents]) (0, _assign3.default)(attrs, {
                                onChange: props.onChange
                        });
                        if (this.set[Features.InputField]) (0, _assign3.default)(attrs, {
                                value: props.value
                        });
                        return attrs;
                }
        }, {
                key: 'getPropTypes',
                value: function getPropTypes() {
                        var propTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                        if (this.set[Features.ClassNames]) (0, _assign3.default)(propTypes, {
                                className: _react.PropTypes.string,
                                innerClassName: _react.PropTypes.string
                        });
                        if (this.set[Features.Visibility]) (0, _assign3.default)(propTypes, {
                                show: _react.PropTypes.bool
                        });
                        if (this.set[Features.Float]) (0, _assign3.default)(propTypes, {
                                float: oneOfList(_enums.Alignment)
                        });
                        if (this.set[Features.Disabled]) (0, _assign3.default)(propTypes, {
                                disabled: _react.PropTypes.bool
                        });
                        if (this.set[Features.MouseEvents]) (0, _assign3.default)(propTypes, {
                                onClick: _react.PropTypes.func
                        });
                        if (this.set[Features.DataEvents]) (0, _assign3.default)(propTypes, {
                                onChange: _react.PropTypes.func
                        });
                        if (this.set[Features.InputField]) (0, _assign3.default)(propTypes, {
                                value: this.set[Features.InputField],
                                label: _react.PropTypes.string,
                                isInline: _react.PropTypes.bool
                        });
                        if (this.set[Features.Alignment]) (0, _assign3.default)(propTypes, {
                                alignment: oneOfList(_enums.Alignment)
                        });
                        if (this.set[Features.Active]) (0, _assign3.default)(propTypes, {
                                isActive: _react.PropTypes.bool
                        });
                        if (this.set[Features.Orientation]) (0, _assign3.default)(propTypes, {
                                orientation: oneOfList(_enums.Orientation)
                        });
                        if (this.set[Features.ContentExpand]) (0, _assign3.default)(propTypes, {
                                isExpanded: _react.PropTypes.bool
                        });
                        if (this.set[Features.MenuStyle]) (0, _assign3.default)(propTypes, {
                                isSimple: _react.PropTypes.bool,
                                isNested: _react.PropTypes.bool,
                                iconTop: _react.PropTypes.bool
                        });
                        if (this.set[Features.Icon]) (0, _assign3.default)(propTypes, {
                                icon: _react.PropTypes.string
                        });
                        if (this.set[Features.RowStyle]) (0, _assign3.default)(propTypes, {
                                isColumn: _react.PropTypes.bool
                        });
                        if (this.set[Features.Gutters]) (0, _assign3.default)(propTypes, {
                                collapse: _react.PropTypes.bool,
                                collapseOn: _react.PropTypes.oneOfType([oneOfList(_enums.Size), _react.PropTypes.arrayOf(oneOfList(_enums.Size))]),
                                uncollapseOn: _react.PropTypes.oneOfType([oneOfList(_enums.Size), _react.PropTypes.arrayOf(oneOfList(_enums.Size))])
                        });
                        if (this.set[Features.ColumnStyle]) (0, _assign3.default)(propTypes, {
                                small: _react.PropTypes.number,
                                medium: _react.PropTypes.number,
                                large: _react.PropTypes.number,
                                xlarge: _react.PropTypes.number,
                                xxlarge: _react.PropTypes.number,
                                offsetOn: _react.PropTypes.arrayOf(_react.PropTypes.oneOf([oneOfList(_enums.Size), _react.PropTypes.number, _react.PropTypes.arrayOf([oneOfList(_enums.Size), _react.PropTypes.number])]))
                        });
                        return propTypes;
                }
        }, {
                key: 'getDefaultProps',
                value: function getDefaultProps() {
                        var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                        if (this.set[Features.Float]) (0, _assign3.default)(defaultProps, {
                                float: _enums.Alignment.None
                        });
                        if (this.set[Features.Disabled]) (0, _assign3.default)(defaultProps, {
                                disabled: false
                        });
                        if (this.set[Features.InputField]) (0, _assign3.default)(defaultProps, {
                                label: null
                        });
                        if (this.set[Features.Alignment]) (0, _assign3.default)(defaultProps, {
                                alignment: _enums.Alignment.None
                        });
                        if (this.set[Features.Orientation]) (0, _assign3.default)(defaultProps, {
                                orientation: _enums.Orientation.Default
                        });
                        return defaultProps;
                }
        }]);

        return FeatureSet;
}();