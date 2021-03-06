import { PropTypes } from 'react';
import classNames from 'classnames';

import { ALIGNMENT, SIZE, GUTTERS } from '../enums';

import _values from 'lodash/values';
import _isUndefined from 'lodash/isUndefined';
import _assign from 'lodash/assign';
import _map from 'lodash/map';
import _isString from 'lodash/isString';
import _isArray from 'lodash/isArray';
import _isNumber from 'lodash/isNumber';
import _isFunction from 'lodash/isFunction';
import _size from 'lodash/size';

export const Features = {
    ClassNames:     "ClassNames",
    Visibility:     "Visibility",
    Disabled:       "Disabled",
    MouseEvents:    "MouseEvents",
    DataEvents:     "DataEvents",
    Float:          "Float",
    InputField:     "InputField",
    Alignment:      "Alignment",
    Active:         "Active",
    Orientation:    "Orientation",
    ContentExpand:  "ContentExpand",
    MenuStyle:      "MenuStyle",
    RowStyle:       "RowStyle",
    ColumnStyle:    "ColumnStyle",
    IconStyle:      "IconStyle",
    Gutters:        "Gutters",
    Link:           "Link",
    Content:        "Content",
    Label:          "Label"
};
function _isSimple(attr) {
    return !_isUndefined(attr) && (_isString(attr) || _isNumber(attr));
}
function oneOfList(obj) {
    return PropTypes.oneOf(_values(obj));
}
function append(attr, ...attrs) {
    if(!_isSimple(attr)) return "";
    return "-" + attr + append(...attrs);
}
function mediaToClass(size, ...attrs) {
    if(_isSimple(size)) return size + append(...attrs);
    if(_isArray(size)) return classNames(_map(size, (s) => mediaToClass(s, ...attrs)));
}
function pairToClass(arr, ...attrs) {
    if(!_isArray(arr)) return null;
    if(_size(arr) == 2 && _isSimple(arr[1])) return mediaToClass(arr[0], ...attrs, arr[1]);
    if(_isArray(arr[0])) return classNames(_map(arr, (pair) => pairToClass(pair, ...attrs)));
}

const PropTypes_sizeArray = PropTypes.oneOfType([oneOfList(SIZE), PropTypes.arrayOf(oneOfList(SIZE))]);
const PropTypes_sizePairArray = PropTypes.arrayOf(PropTypes.oneOfType([oneOfList(SIZE), PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([oneOfList(SIZE), PropTypes.number]))]));

function link(url, context, cb = (e) => e.preventDefault()) {
    return (e) => {
        cb(e);
        context.router.push(url);
    };
}

export class FeatureSet {
    constructor(set = {}) {
        this.set = set;

        this.getClassNames      = this.getClassNames.bind(this);
        this.getInnerClassNames = this.getInnerClassNames.bind(this);
        this.getAttrs           = this.getAttrs.bind(this);
        this.getDefaultProps    = this.getDefaultProps.bind(this);
        this.getPropTypes       = this.getPropTypes.bind(this);
        this.getContextTypes    = this.getContextTypes.bind(this);
    }
    getClassNames(props, extraClasses) {
        let classes = [{
                [extraClasses]                                          : _isString(extraClasses)
        }];
        if(this.set[Features.ClassNames]) classes.push({
                [props.className]                                       : _isString(props.className)
        });
        if(this.set[Features.Visibility]) classes.push({
                "show"                                                  : props.show === true,
                "hide"                                                  : props.show === false
        });
        if(this.set[Features.Float]) classes.push({
                ["float-"+props.float]                                  : _isString(props.float)
        });
        if(this.set[Features.Alignment]) classes.push({
                ["align-"+props.alignment]                              : _isString(props.alignment)
        });
        if(this.set[Features.Active]) classes.push({
                [this.set[Features.Active]]                             : props.isActive === true
        });
        if(this.set[Features.Orientation]) classes.push({
                "vertical"                                              : props.isVertical === true,
                "horizontal"                                            : props.isHorizontal === true,
                [mediaToClass(props.verticalOn, "vertical")]            : !_isUndefined(props.verticalOn),
                [mediaToClass(props.horizontalOn, "horizontal")]        : !_isUndefined(props.horizontalOn)
        });
        if(this.set[Features.ContentExpand]) classes.push({
                "expanded"                                              : props.isExpanded === true
        });
        if(this.set[Features.MenuStyle]) classes.push({
                "simple"                                                : props.isSimple === true,
                "nested"                                                : props.isNested === true,
                "icon-top"                                              : props.iconTop === true
        });
        if(this.set[Features.IconStyle]) classes.push({
                ["fi-"+props.icon]                                      : _isString(props.icon)
        });
        if(this.set[Features.RowStyle]) classes.push({
                "row"                                                   : true,
                "column"                                                : props.isColumn === true,
                [mediaToClass(SIZE.Small, "up", props.smallUp)]         : !_isUndefined(props.smallUp),
                [mediaToClass(SIZE.Medium, "up", props.mediumUp)]       : !_isUndefined(props.mediumUp),
                [mediaToClass(SIZE.Large, "up", props.largeUp)]         : !_isUndefined(props.largeUp),
                [mediaToClass(SIZE.XLarge, "up", props.xlargeUp)]       : !_isUndefined(props.xlargeUp),
                [mediaToClass(SIZE.XXLarge, "up", props.xxlargeUp)]     : !_isUndefined(props.xxlargeUp)
        });
        if(this.set[Features.ColumnStyle]) classes.push({
                [mediaToClass(SIZE.Small, props.small)]                 : !_isUndefined(props.small),
                [mediaToClass(SIZE.Medium, props.medium)]               : !_isUndefined(props.medium),
                [mediaToClass(SIZE.Large, props.large)]                 : !_isUndefined(props.large),
                [mediaToClass(SIZE.XLarge, props.xlarge)]               : !_isUndefined(props.xlarge),
                [mediaToClass(SIZE.XXLarge, props.xxlarge)]             : !_isUndefined(props.xxlarge),
                [mediaToClass(props.centerOn, "centered")]              : !_isUndefined(props.centerOn),
                [mediaToClass(props.uncenterOn, "uncentered")]          : !_isUndefined(props.uncenterOn),
                [pairToClass(props.offsetOn, "offset")]                 : _isArray(props.offsetOn),
                [pairToClass(props.pushOn, "push")]                     : _isArray(props.pushOn),
                [pairToClass(props.pullOn, "pull")]                     : _isArray(props.pullOn),
                "columns"                                               : true,
                "end"                                                   : props.isEnd === true
        });
        if(this.set[Features.Gutters]) classes.push({
                [GUTTERS.Collapse]                                      : props.isCollapsed === true,
                [mediaToClass(props.collapseOn, GUTTERS.Collapse)]      : !_isUndefined(props.collapseOn),
                [mediaToClass(props.uncollapseOn, GUTTERS.Uncollapse)]  : !_isUndefined(props.uncollapseOn)
        });
        return classNames(classes);
    }
    getInnerClassNames(props, extraClasses) {
        let classes = [{
                [extraClasses]                                          : _isString(extraClasses)
        }];
        if(this.set[Features.ClassNames]) classes.push({
                [props.innerClassName]                                  : _isString(props.innerClassName)
        });
        if(this.set[Features.InputField]) classes.push({
                "input-group-field"                                     : props.isInline === true
        });
        return classNames(classes);
    }
    getAttrs(props, context) {
        let attrs = {};
        let ref = {props, context};
        if(this.set[Features.Disabled]) _assign(attrs, {
                disabled        : props.disabled
        });
        if(this.set[Features.Link] && this.set[Features.MouseEvents]) {
            if(_isString(props.link) && _isFunction(props.onClick)) _assign(attrs, {
                onClick         : link(props.link, context, props.onClick.bind(ref))
            });
            else if(_isString(props.link)) _assign(attrs, {
                onClick         : link(props.link, context)
            });
            else if(_isFunction(props.onClick)) _assign(attrs, {
                onClick         : props.onClick.bind(ref)
            });
        } else if(this.set[Features.Link] && _isString(props.link)) _assign(attrs, {
                onClick         : link(props.link, context)
        });
        else if(this.set[Features.MouseEvents] && _isFunction(props.onClick)) _assign(attrs, {
                onClick         : props.onClick.bind(ref)
        });
        if(this.set[Features.DataEvents]) _assign(attrs, {
                onChange        : props.onChange
        });
        if(this.set[Features.InputField]) _assign(attrs, {
                value           : props.value
        });
        if(this.set[Features.Active]) _assign(attrs, {
                "aria-selected" : props.isActive
        });
        return attrs;
    }
    getPropTypes(propTypes = {}) {
        if(this.set[Features.ClassNames]) _assign(propTypes, {
                className       : PropTypes.string,
                innerClassName  : PropTypes.string
        });
        if(this.set[Features.Visibility]) _assign(propTypes, {
                show            : PropTypes.bool
        });
        if(this.set[Features.Float]) _assign(propTypes, {
                float           : oneOfList(ALIGNMENT)
        });
        if(this.set[Features.Disabled]) _assign(propTypes, {
                disabled        : PropTypes.bool
        });
        if(this.set[Features.MouseEvents]) _assign(propTypes, {
                onClick         : PropTypes.func
        });
        if(this.set[Features.DataEvents]) _assign(propTypes, {
                onChange        : PropTypes.func
        });
        if(this.set[Features.InputField]) _assign(propTypes, {
                value           : this.set[Features.InputField],
                label           : PropTypes.string,
                isInline        : PropTypes.bool
        });
        if(this.set[Features.Alignment]) _assign(propTypes, {
                alignment       : oneOfList(ALIGNMENT)
        });
        if(this.set[Features.Active]) _assign(propTypes, {
                isActive        : PropTypes.bool
        });
        if(this.set[Features.Orientation]) _assign(propTypes, {
                isVertical      : PropTypes.bool,
                isHorizontal    : PropTypes.bool,
                verticalOn      : PropTypes_sizeArray,
                horizontalOn    : PropTypes_sizeArray
        });
        if(this.set[Features.ContentExpand]) _assign(propTypes, {
                isExpanded      : PropTypes.bool
        });
        if(this.set[Features.MenuStyle]) _assign(propTypes, {
                isSimple        : PropTypes.bool,
                isNested        : PropTypes.bool,
                iconTop         : PropTypes.bool
        });
        if(this.set[Features.IconStyle]) _assign(propTypes, {
                icon            : PropTypes.string
        });
        if(this.set[Features.RowStyle]) _assign(propTypes, {
                smallUp         : PropTypes.number,
                mediumUp        : PropTypes.number,
                largeUp         : PropTypes.number,
                xlargeUp        : PropTypes.number,
                xxlargeUp       : PropTypes.number,
                isColumn        : PropTypes.bool
        });
        if(this.set[Features.Gutters]) _assign(propTypes, {
                isCollapsed     : PropTypes.bool,
                collapseOn      : PropTypes_sizeArray,
                uncollapseOn    : PropTypes_sizeArray
        });
        if(this.set[Features.ColumnStyle]) _assign(propTypes, {
                small           : PropTypes.number,
                medium          : PropTypes.number,
                large           : PropTypes.number,
                xlarge          : PropTypes.number,
                xxlarge         : PropTypes.number,
                centerOn        : PropTypes_sizeArray,
                uncenterOn      : PropTypes_sizeArray,
                offsetOn        : PropTypes_sizePairArray,
                pushOn          : PropTypes_sizePairArray,
                pullOn          : PropTypes_sizePairArray,
                isEnd           : PropTypes.bool
        });
        if(this.set[Features.Link]) _assign(propTypes, {
                link            : PropTypes.string
        });
        if(this.set[Features.Content]) _assign(propTypes, {
                children        : PropTypes.node
        });
        if(this.set[Features.Label]) _assign(propTypes, {
                label           : PropTypes.string,
        });
        return propTypes;
    }
    getDefaultProps(defaultProps = {}) {
        if(this.set[Features.Disabled]) _assign(defaultProps, {
                disabled        : false
        });
        if(this.set[Features.InputField]) _assign(defaultProps, {
                label           : null
        });
        return defaultProps;
    }
    getContextTypes(context = {}) {
        if(this.set[Features.Link]) _assign(context, {
                router          : PropTypes.object
        });
        return context;
    }
}