'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.FeatureSet = exports.Features = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _enums = require('../enums');

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

var _isNumber2 = require('lodash/isNumber');

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

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
        IconStyle: "IconStyle",
        Gutters: "Gutters",
        Link: "Link",
        Content: "Content",
        Label: "Label"
};
function _isSimple(attr) {
        return !(0, _isUndefined3.default)(attr) && ((0, _isString3.default)(attr) || (0, _isNumber3.default)(attr));
}
function oneOfList(obj) {
        return _react.PropTypes.oneOf((0, _values3.default)(obj));
}
function append(attr) {
        if (!_isSimple(attr)) return "";

        for (var _len = arguments.length, attrs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                attrs[_key - 1] = arguments[_key];
        }

        return "-" + attr + append.apply(undefined, attrs);
}
function mediaToClass(size) {
        for (var _len2 = arguments.length, attrs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                attrs[_key2 - 1] = arguments[_key2];
        }

        if (_isSimple(size)) return size + append.apply(undefined, attrs);
        if ((0, _isArray3.default)(size)) return (0, _classnames2.default)((0, _map3.default)(size, function (s) {
                return mediaToClass.apply(undefined, [s].concat(attrs));
        }));
}
function pairToClass(arr) {
        for (var _len3 = arguments.length, attrs = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                attrs[_key3 - 1] = arguments[_key3];
        }

        if (!(0, _isArray3.default)(arr)) return null;
        if ((0, _size3.default)(arr) == 2 && _isSimple(arr[1])) return mediaToClass.apply(undefined, [arr[0]].concat(attrs, [arr[1]]));
        if ((0, _isArray3.default)(arr[0])) return (0, _classnames2.default)((0, _map3.default)(arr, function (pair) {
                return pairToClass.apply(undefined, [pair].concat(attrs));
        }));
}

var PropTypes_sizeArray = _react.PropTypes.oneOfType([oneOfList(_enums.SIZE), _react.PropTypes.arrayOf(oneOfList(_enums.SIZE))]);
var PropTypes_sizePairArray = _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([oneOfList(_enums.SIZE), _react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([oneOfList(_enums.SIZE), _react.PropTypes.number]))]));

function link(url, context) {
        var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (e) {
                return e.preventDefault();
        };

        return function (e) {
                cb(e);
                context.router.push(url);
        };
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
                this.getContextTypes = this.getContextTypes.bind(this);
        }

        _createClass(FeatureSet, [{
                key: 'getClassNames',
                value: function getClassNames(props, extraClasses) {
                        var _classes$push5, _classes$push7, _classes$push8, _classes$push9;

                        var classes = [_defineProperty({}, extraClasses, (0, _isString3.default)(extraClasses))];
                        if (this.set[Features.ClassNames]) classes.push(_defineProperty({}, props.className, (0, _isString3.default)(props.className)));
                        if (this.set[Features.Visibility]) classes.push({
                                "show": props.show === true,
                                "hide": props.show === false
                        });
                        if (this.set[Features.Float]) classes.push(_defineProperty({}, "float-" + props.float, (0, _isString3.default)(props.float)));
                        if (this.set[Features.Alignment]) classes.push(_defineProperty({}, "align-" + props.alignment, (0, _isString3.default)(props.alignment)));
                        if (this.set[Features.Active]) classes.push(_defineProperty({}, this.set[Features.Active], props.isActive === true));
                        if (this.set[Features.Orientation]) classes.push((_classes$push5 = {
                                "vertical": props.isVertical === true,
                                "horizontal": props.isHorizontal === true
                        }, _defineProperty(_classes$push5, mediaToClass(props.verticalOn, "vertical"), !(0, _isUndefined3.default)(props.verticalOn)), _defineProperty(_classes$push5, mediaToClass(props.horizontalOn, "horizontal"), !(0, _isUndefined3.default)(props.horizontalOn)), _classes$push5));
                        if (this.set[Features.ContentExpand]) classes.push({
                                "expanded": props.isExpanded === true
                        });
                        if (this.set[Features.MenuStyle]) classes.push({
                                "simple": props.isSimple === true,
                                "nested": props.isNested === true,
                                "icon-top": props.iconTop === true
                        });
                        if (this.set[Features.IconStyle]) classes.push(_defineProperty({}, "fi-" + props.icon, (0, _isString3.default)(props.icon)));
                        if (this.set[Features.RowStyle]) classes.push((_classes$push7 = {
                                "row": true,
                                "column": props.isColumn === true
                        }, _defineProperty(_classes$push7, mediaToClass(_enums.SIZE.Small, "up", props.smallUp), !(0, _isUndefined3.default)(props.smallUp)), _defineProperty(_classes$push7, mediaToClass(_enums.SIZE.Medium, "up", props.mediumUp), !(0, _isUndefined3.default)(props.mediumUp)), _defineProperty(_classes$push7, mediaToClass(_enums.SIZE.Large, "up", props.largeUp), !(0, _isUndefined3.default)(props.largeUp)), _defineProperty(_classes$push7, mediaToClass(_enums.SIZE.XLarge, "up", props.xlargeUp), !(0, _isUndefined3.default)(props.xlargeUp)), _defineProperty(_classes$push7, mediaToClass(_enums.SIZE.XXLarge, "up", props.xxlargeUp), !(0, _isUndefined3.default)(props.xxlargeUp)), _classes$push7));
                        if (this.set[Features.ColumnStyle]) classes.push((_classes$push8 = {}, _defineProperty(_classes$push8, mediaToClass(_enums.SIZE.Small, props.small), !(0, _isUndefined3.default)(props.small)), _defineProperty(_classes$push8, mediaToClass(_enums.SIZE.Medium, props.medium), !(0, _isUndefined3.default)(props.medium)), _defineProperty(_classes$push8, mediaToClass(_enums.SIZE.Large, props.large), !(0, _isUndefined3.default)(props.large)), _defineProperty(_classes$push8, mediaToClass(_enums.SIZE.XLarge, props.xlarge), !(0, _isUndefined3.default)(props.xlarge)), _defineProperty(_classes$push8, mediaToClass(_enums.SIZE.XXLarge, props.xxlarge), !(0, _isUndefined3.default)(props.xxlarge)), _defineProperty(_classes$push8, mediaToClass(props.centerOn, "centered"), !(0, _isUndefined3.default)(props.centerOn)), _defineProperty(_classes$push8, mediaToClass(props.uncenterOn, "uncentered"), !(0, _isUndefined3.default)(props.uncenterOn)), _defineProperty(_classes$push8, pairToClass(props.offsetOn, "offset"), (0, _isArray3.default)(props.offsetOn)), _defineProperty(_classes$push8, pairToClass(props.pushOn, "push"), (0, _isArray3.default)(props.pushOn)), _defineProperty(_classes$push8, pairToClass(props.pullOn, "pull"), (0, _isArray3.default)(props.pullOn)), _defineProperty(_classes$push8, "columns", true), _defineProperty(_classes$push8, "end", props.isEnd === true), _classes$push8));
                        if (this.set[Features.Gutters]) classes.push((_classes$push9 = {}, _defineProperty(_classes$push9, _enums.GUTTERS.Collapse, props.isCollapsed === true), _defineProperty(_classes$push9, mediaToClass(props.collapseOn, _enums.GUTTERS.Collapse), !(0, _isUndefined3.default)(props.collapseOn)), _defineProperty(_classes$push9, mediaToClass(props.uncollapseOn, _enums.GUTTERS.Uncollapse), !(0, _isUndefined3.default)(props.uncollapseOn)), _classes$push9));
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
                value: function getAttrs(props, context) {
                        var attrs = {};
                        var ref = { props: props, context: context };
                        if (this.set[Features.Disabled]) (0, _assign3.default)(attrs, {
                                disabled: props.disabled
                        });
                        if (this.set[Features.Link] && this.set[Features.MouseEvents]) {
                                if ((0, _isString3.default)(props.link) && (0, _isFunction3.default)(props.onClick)) (0, _assign3.default)(attrs, {
                                        onClick: link(props.link, context, props.onClick.bind(ref))
                                });else if ((0, _isString3.default)(props.link)) (0, _assign3.default)(attrs, {
                                        onClick: link(props.link, context)
                                });else if ((0, _isFunction3.default)(props.onClick)) (0, _assign3.default)(attrs, {
                                        onClick: props.onClick.bind(ref)
                                });
                        } else if (this.set[Features.Link] && (0, _isString3.default)(props.link)) (0, _assign3.default)(attrs, {
                                onClick: link(props.link, context)
                        });else if (this.set[Features.MouseEvents] && (0, _isFunction3.default)(props.onClick)) (0, _assign3.default)(attrs, {
                                onClick: props.onClick.bind(ref)
                        });
                        if (this.set[Features.DataEvents]) (0, _assign3.default)(attrs, {
                                onChange: props.onChange
                        });
                        if (this.set[Features.InputField]) (0, _assign3.default)(attrs, {
                                value: props.value
                        });
                        if (this.set[Features.Active]) (0, _assign3.default)(attrs, {
                                "aria-selected": props.isActive
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
                                float: oneOfList(_enums.ALIGNMENT)
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
                                alignment: oneOfList(_enums.ALIGNMENT)
                        });
                        if (this.set[Features.Active]) (0, _assign3.default)(propTypes, {
                                isActive: _react.PropTypes.bool
                        });
                        if (this.set[Features.Orientation]) (0, _assign3.default)(propTypes, {
                                isVertical: _react.PropTypes.bool,
                                isHorizontal: _react.PropTypes.bool,
                                verticalOn: PropTypes_sizeArray,
                                horizontalOn: PropTypes_sizeArray
                        });
                        if (this.set[Features.ContentExpand]) (0, _assign3.default)(propTypes, {
                                isExpanded: _react.PropTypes.bool
                        });
                        if (this.set[Features.MenuStyle]) (0, _assign3.default)(propTypes, {
                                isSimple: _react.PropTypes.bool,
                                isNested: _react.PropTypes.bool,
                                iconTop: _react.PropTypes.bool
                        });
                        if (this.set[Features.IconStyle]) (0, _assign3.default)(propTypes, {
                                icon: _react.PropTypes.string
                        });
                        if (this.set[Features.RowStyle]) (0, _assign3.default)(propTypes, {
                                smallUp: _react.PropTypes.number,
                                mediumUp: _react.PropTypes.number,
                                largeUp: _react.PropTypes.number,
                                xlargeUp: _react.PropTypes.number,
                                xxlargeUp: _react.PropTypes.number,
                                isColumn: _react.PropTypes.bool
                        });
                        if (this.set[Features.Gutters]) (0, _assign3.default)(propTypes, {
                                isCollapsed: _react.PropTypes.bool,
                                collapseOn: PropTypes_sizeArray,
                                uncollapseOn: PropTypes_sizeArray
                        });
                        if (this.set[Features.ColumnStyle]) (0, _assign3.default)(propTypes, {
                                small: _react.PropTypes.number,
                                medium: _react.PropTypes.number,
                                large: _react.PropTypes.number,
                                xlarge: _react.PropTypes.number,
                                xxlarge: _react.PropTypes.number,
                                centerOn: PropTypes_sizeArray,
                                uncenterOn: PropTypes_sizeArray,
                                offsetOn: PropTypes_sizePairArray,
                                pushOn: PropTypes_sizePairArray,
                                pullOn: PropTypes_sizePairArray,
                                isEnd: _react.PropTypes.bool
                        });
                        if (this.set[Features.Link]) (0, _assign3.default)(propTypes, {
                                link: _react.PropTypes.string
                        });
                        if (this.set[Features.Content]) (0, _assign3.default)(propTypes, {
                                children: _react.PropTypes.node
                        });
                        if (this.set[Features.Label]) (0, _assign3.default)(propTypes, {
                                label: _react.PropTypes.string
                        });
                        return propTypes;
                }
        }, {
                key: 'getDefaultProps',
                value: function getDefaultProps() {
                        var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                        if (this.set[Features.Disabled]) (0, _assign3.default)(defaultProps, {
                                disabled: false
                        });
                        if (this.set[Features.InputField]) (0, _assign3.default)(defaultProps, {
                                label: null
                        });
                        return defaultProps;
                }
        }, {
                key: 'getContextTypes',
                value: function getContextTypes() {
                        var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                        if (this.set[Features.Link]) (0, _assign3.default)(context, {
                                router: _react.PropTypes.object
                        });
                        return context;
                }
        }]);

        return FeatureSet;
}();