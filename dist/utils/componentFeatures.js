'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextField = exports.NumberField = exports.Divider = exports.Title = exports.Button = undefined;

var _ref, _ref2, _ref3, _ref4, _ref5;

var _FeatureSet = require('./FeatureSet');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = exports.Button = new _FeatureSet.FeatureSet((_ref = {}, _defineProperty(_ref, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref, _FeatureSet.Features.Visibility, true), _defineProperty(_ref, _FeatureSet.Features.Float, true), _defineProperty(_ref, _FeatureSet.Features.Disabled, true), _defineProperty(_ref, _FeatureSet.Features.MouseEvents, true), _ref));

var Title = exports.Title = new _FeatureSet.FeatureSet((_ref2 = {}, _defineProperty(_ref2, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref2, _FeatureSet.Features.Visibility, true), _ref2));

var Divider = exports.Divider = new _FeatureSet.FeatureSet((_ref3 = {}, _defineProperty(_ref3, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref3, _FeatureSet.Features.Visibility, true), _ref3));

var NumberField = exports.NumberField = new _FeatureSet.FeatureSet((_ref4 = {}, _defineProperty(_ref4, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref4, _FeatureSet.Features.Visibility, true), _defineProperty(_ref4, _FeatureSet.Features.Disabled, true), _defineProperty(_ref4, _FeatureSet.Features.DataEvents, true), _ref4));

var TextField = exports.TextField = new _FeatureSet.FeatureSet((_ref5 = {}, _defineProperty(_ref5, _FeatureSet.Features.ClassNames, true), _defineProperty(_ref5, _FeatureSet.Features.Visibility, true), _defineProperty(_ref5, _FeatureSet.Features.Disabled, true), _defineProperty(_ref5, _FeatureSet.Features.DataEvents, true), _ref5));