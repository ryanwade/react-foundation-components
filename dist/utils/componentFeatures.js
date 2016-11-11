'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Icon = exports.MenuText = exports.MenuItem = exports.Menu = exports.Expand = exports.ExpandTitle = exports.ExpandContent = exports.TextArea = exports.TextField = exports.NumberField = exports.Divider = exports.Title = exports.Button = undefined;

var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref10, _ref11, _ref13;

var _react = require('react');

var _FeatureSet = require('./FeatureSet');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = exports.Button = new _FeatureSet.FeatureSet((_ref = {}, _defineProperty(_ref, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref, _FeatureSet.Features.Visibility, true), _defineProperty(_ref, _FeatureSet.Features.Float, true), _defineProperty(_ref, _FeatureSet.Features.Disabled, true), _defineProperty(_ref, _FeatureSet.Features.MouseEvents, true), _ref));

var Title = exports.Title = new _FeatureSet.FeatureSet((_ref2 = {}, _defineProperty(_ref2, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref2, _FeatureSet.Features.Visibility, true), _ref2));

var Divider = exports.Divider = new _FeatureSet.FeatureSet((_ref3 = {}, _defineProperty(_ref3, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref3, _FeatureSet.Features.Visibility, true), _ref3));

var NumberField = exports.NumberField = new _FeatureSet.FeatureSet((_ref4 = {}, _defineProperty(_ref4, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref4, _FeatureSet.Features.Visibility, true), _defineProperty(_ref4, _FeatureSet.Features.Disabled, true), _defineProperty(_ref4, _FeatureSet.Features.DataEvents, true), _defineProperty(_ref4, _FeatureSet.Features.InputField, _react.PropTypes.number.isRequired), _ref4));

var TextField = exports.TextField = new _FeatureSet.FeatureSet((_ref5 = {}, _defineProperty(_ref5, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref5, _FeatureSet.Features.Visibility, true), _defineProperty(_ref5, _FeatureSet.Features.Disabled, true), _defineProperty(_ref5, _FeatureSet.Features.DataEvents, true), _defineProperty(_ref5, _FeatureSet.Features.InputField, _react.PropTypes.string.isRequired), _ref5));

var TextArea = exports.TextArea = new _FeatureSet.FeatureSet((_ref6 = {}, _defineProperty(_ref6, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref6, _FeatureSet.Features.Visibility, true), _defineProperty(_ref6, _FeatureSet.Features.Disabled, true), _defineProperty(_ref6, _FeatureSet.Features.DataEvents, true), _defineProperty(_ref6, _FeatureSet.Features.InputField, _react.PropTypes.string.isRequired), _ref6));

var ExpandContent = exports.ExpandContent = new _FeatureSet.FeatureSet(_defineProperty({}, _FeatureSet.Features.Visibility, true));

var ExpandTitle = exports.ExpandTitle = new _FeatureSet.FeatureSet(_defineProperty({}, _FeatureSet.Features.MouseEvents, true));

var Expand = exports.Expand = new _FeatureSet.FeatureSet(_defineProperty({}, _FeatureSet.Features.ClassNames, true));

var Menu = exports.Menu = new _FeatureSet.FeatureSet((_ref10 = {}, _defineProperty(_ref10, _FeatureSet.Features.Visibility, true), _defineProperty(_ref10, _FeatureSet.Features.Alignment, true), _defineProperty(_ref10, _FeatureSet.Features.Orientaiton, true), _defineProperty(_ref10, _FeatureSet.Features.Expanded, true), _defineProperty(_ref10, _FeatureSet.Features.Simple, true), _defineProperty(_ref10, _FeatureSet.Features.Nested, true), _defineProperty(_ref10, _FeatureSet.Features.IconTop, true), _ref10));

var MenuItem = exports.MenuItem = new _FeatureSet.FeatureSet((_ref11 = {}, _defineProperty(_ref11, _FeatureSet.Features.Visibility, true), _defineProperty(_ref11, _FeatureSet.Features.Active, true), _ref11));

var MenuText = exports.MenuText = new _FeatureSet.FeatureSet(_defineProperty({}, _FeatureSet.Features.Visibility, true));

var Icon = exports.Icon = new _FeatureSet.FeatureSet((_ref13 = {}, _defineProperty(_ref13, _FeatureSet.Features.Visibility, true), _defineProperty(_ref13, _FeatureSet.Features.Icon, true), _ref13));