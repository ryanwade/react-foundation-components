'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * UI Builder Class
 */
var UI_Builder = function () {
    function UI_Builder() {
        var Components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var FunctionAttrs_Builder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
            return null;
        };

        _classCallCheck(this, UI_Builder);

        this.Components = Components;
        this.FunctionAttrs_Builder = FunctionAttrs_Builder;

        this.build = this.build.bind(this);
        this.Pane_Builder = this.Pane_Builder.bind(this);
        this.Component_Builder = this.Component_Builder.bind(this);
        this.DynamicAttrs_Builder = this.DynamicAttrs_Builder.bind(this);
    }

    /*
    * Construct UI from Redux state
    */


    _createClass(UI_Builder, [{
        key: 'build',
        value: function build() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { root: null, panes: {} };

            var root = _ref.root;
            var panes = _ref.panes;

            if (root === null) return null;
            return this.Pane_Builder(panes, root);
        }
        /*
        * Build Pane from Pane ID
        */

    }, {
        key: 'Pane_Builder',
        value: function Pane_Builder() {
            var panes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var Pane = panes[id];
            if (id === null || Pane === undefined) return null;
            return this.Component_Builder(panes, Pane.components, Pane.root);
        }
        /*
        * Build Component(s) from Component ID(s)
        */

    }, {
        key: 'Component_Builder',
        value: function Component_Builder() {
            var panes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _this = this;

            var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var ids = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            ids = (0, _isArray3.default)(ids) ? ids : [ids];
            return ids.map(function (id) {
                var Component = components[id];
                if (id === null || Component === undefined) return null;
                var result = null;
                var ReactComponent = null;
                switch (Component.type) {
                    case "pane":
                        return _this.Pane_Builder(panes, Component.id);
                    default:
                        ReactComponent = _this.Components[Component.type] || Component.type;
                        result = _react2.default.createElement(
                            ReactComponent,
                            _extends({ key: id }, Component.attrs, _this.DynamicAttr_Builder(panes, components, Component.dynamic), _this.FunctionAttr_Builder(Component.actions)),
                            Component.content,
                            _this.Component_Builder(panes, components, Component.children)
                        );
                        return result;
                }
            });
        }

        /*
        * Build Attrs which are comprised of components
        */

    }, {
        key: 'DynamicAttrs_Builder',
        value: function DynamicAttrs_Builder() {
            var panes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _this2 = this;

            var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var ret = {};
            Object.keys(attrs).map(function (attr) {
                ret[attr] = _this2.Component_Builder(panes, components, attrs[attr]);
            });
            return ret;
        }
    }]);

    return UI_Builder;
}();

exports.default = UI_Builder;