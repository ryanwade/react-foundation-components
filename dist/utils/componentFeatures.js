'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabsContent = exports.TabsTitle = exports.Tabs = exports.Column = exports.Row = exports.Icon = exports.MenuText = exports.MenuItem = exports.Menu = exports.Expand = exports.ExpandTitle = exports.ExpandContent = exports.TextArea = exports.TextField = exports.NumberField = exports.Divider = exports.Title = exports.Button = undefined;

var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18;

var _react = require('react');

var _FeatureSet = require('./FeatureSet');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = exports.Button = new _FeatureSet.FeatureSet((_ref = {}, _defineProperty(_ref, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref, _FeatureSet.Features.Visibility, true), _defineProperty(_ref, _FeatureSet.Features.MouseEvents, true), _defineProperty(_ref, _FeatureSet.Features.Link, true), _defineProperty(_ref, _FeatureSet.Features.Disabled, true), _defineProperty(_ref, _FeatureSet.Features.Float, true), _ref));

var Title = exports.Title = new _FeatureSet.FeatureSet((_ref2 = {}, _defineProperty(_ref2, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref2, _FeatureSet.Features.Visibility, true), _ref2));

var Divider = exports.Divider = new _FeatureSet.FeatureSet((_ref3 = {}, _defineProperty(_ref3, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref3, _FeatureSet.Features.Visibility, true), _ref3));

var NumberField = exports.NumberField = new _FeatureSet.FeatureSet((_ref4 = {}, _defineProperty(_ref4, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref4, _FeatureSet.Features.Visibility, true), _defineProperty(_ref4, _FeatureSet.Features.DataEvents, true), _defineProperty(_ref4, _FeatureSet.Features.Disabled, true), _defineProperty(_ref4, _FeatureSet.Features.InputField, _react.PropTypes.number.isRequired), _ref4));

var TextField = exports.TextField = new _FeatureSet.FeatureSet((_ref5 = {}, _defineProperty(_ref5, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref5, _FeatureSet.Features.Visibility, true), _defineProperty(_ref5, _FeatureSet.Features.DataEvents, true), _defineProperty(_ref5, _FeatureSet.Features.Disabled, true), _defineProperty(_ref5, _FeatureSet.Features.InputField, _react.PropTypes.string.isRequired), _ref5));

var TextArea = exports.TextArea = new _FeatureSet.FeatureSet((_ref6 = {}, _defineProperty(_ref6, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref6, _FeatureSet.Features.Visibility, true), _defineProperty(_ref6, _FeatureSet.Features.DataEvents, true), _defineProperty(_ref6, _FeatureSet.Features.Disabled, true), _defineProperty(_ref6, _FeatureSet.Features.InputField, _react.PropTypes.string.isRequired), _ref6));

var ExpandContent = exports.ExpandContent = new _FeatureSet.FeatureSet(_defineProperty({}, _FeatureSet.Features.Visibility, true));

var ExpandTitle = exports.ExpandTitle = new _FeatureSet.FeatureSet(_defineProperty({}, _FeatureSet.Features.MouseEvents, true));

var Expand = exports.Expand = new _FeatureSet.FeatureSet((_ref9 = {}, _defineProperty(_ref9, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref9, _FeatureSet.Features.Visibility, true), _ref9));

var Menu = exports.Menu = new _FeatureSet.FeatureSet((_ref10 = {}, _defineProperty(_ref10, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref10, _FeatureSet.Features.Visibility, true), _defineProperty(_ref10, _FeatureSet.Features.MenuStyle, true), _defineProperty(_ref10, _FeatureSet.Features.ContentExpand, true), _defineProperty(_ref10, _FeatureSet.Features.Alignment, true), _defineProperty(_ref10, _FeatureSet.Features.Orientation, true), _ref10));

var MenuItem = exports.MenuItem = new _FeatureSet.FeatureSet((_ref11 = {}, _defineProperty(_ref11, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref11, _FeatureSet.Features.Visibility, true), _defineProperty(_ref11, _FeatureSet.Features.MouseEvents, true), _defineProperty(_ref11, _FeatureSet.Features.Link, true), _defineProperty(_ref11, _FeatureSet.Features.Active, true), _ref11));

var MenuText = exports.MenuText = new _FeatureSet.FeatureSet((_ref12 = {}, _defineProperty(_ref12, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref12, _FeatureSet.Features.Visibility, true), _ref12));

var Icon = exports.Icon = new _FeatureSet.FeatureSet((_ref13 = {}, _defineProperty(_ref13, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref13, _FeatureSet.Features.Visibility, true), _defineProperty(_ref13, _FeatureSet.Features.IconStyle, true), _ref13));

var Row = exports.Row = new _FeatureSet.FeatureSet((_ref14 = {}, _defineProperty(_ref14, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref14, _FeatureSet.Features.Visibility, true), _defineProperty(_ref14, _FeatureSet.Features.RowStyle, true), _defineProperty(_ref14, _FeatureSet.Features.ContentExpand, true), _defineProperty(_ref14, _FeatureSet.Features.Gutters, true), _ref14));

var Column = exports.Column = new _FeatureSet.FeatureSet((_ref15 = {}, _defineProperty(_ref15, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref15, _FeatureSet.Features.Visibility, true), _defineProperty(_ref15, _FeatureSet.Features.ColumnStyle, true), _ref15));

var Tabs = exports.Tabs = new _FeatureSet.FeatureSet((_ref16 = {}, _defineProperty(_ref16, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref16, _FeatureSet.Features.Visibility, true), _defineProperty(_ref16, _FeatureSet.Features.Content, true), _defineProperty(_ref16, _FeatureSet.Features.Orientation, true), _ref16));

var TabsTitle = exports.TabsTitle = new _FeatureSet.FeatureSet((_ref17 = {}, _defineProperty(_ref17, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref17, _FeatureSet.Features.Visibility, true), _defineProperty(_ref17, _FeatureSet.Features.MouseEvents, true), _defineProperty(_ref17, _FeatureSet.Features.Label, true), _defineProperty(_ref17, _FeatureSet.Features.Active, true), _ref17));
var TabsContent = exports.TabsContent = new _FeatureSet.FeatureSet((_ref18 = {}, _defineProperty(_ref18, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref18, _FeatureSet.Features.Visibility, true), _defineProperty(_ref18, _FeatureSet.Features.TabContentStyle, true), _defineProperty(_ref18, _FeatureSet.Features.Content, true), _defineProperty(_ref18, _FeatureSet.Features.Orientation, true), _ref18));