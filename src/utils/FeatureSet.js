import { PropTypes } from 'react';
import classNames from 'classnames';

import { Alignment, Orientation, Size, Gutters } from './enums';

import _values from 'lodash/values';
import _isUndefined from 'lodash/isUndefined';
import _assign from 'lodash/assign';
import _map from 'lodash/map';
import _isString from 'lodash/isString';
import _isArray from 'lodash/isArray';
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
    Icon:           "Icon",
    Gutters:        "Gutters"
};

function oneOfList(obj) {
    return PropTypes.oneOf(_values(obj));
}
function append(n) {
    return n? "-" + n: "";
}
function mediaToClass(size, txt, n) {
    if(_isString(size)) return size + append(txt) + append(n);
    if(_isArray(size)) return classNames(_map(size, (s) => mediaToClass(s, txt, n)));
}
function pairToClass(arr) {
    if(!_isArray(arr)) return null;
    if(_size(arr) == 2 && _isString(arr[1])) return mediaToClass(arr[0],"offset",arr[1]);
    if(_isArray(arr[0])) return classNames(_map(arr, (pair) => pairToClass(pair)));
}
export class FeatureSet {
    constructor(set = {}) {
        this.set = set;

        this.getClassNames      = this.getClassNames.bind(this);
        this.getInnerClassNames = this.getInnerClassNames.bind(this);
        this.getAttrs           = this.getAttrs.bind(this);
        this.getDefaultProps    = this.getDefaultProps.bind(this);
        this.getPropTypes       = this.getPropTypes.bind(this);
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
                "active"                                                : props.isActive === true
        });
        if(this.set[Features.Orientation]) classes.push({
                [props.orientation]                                     : !_isUndefined(props.orientation)
        });
        if(this.set[Features.ContentExpand]) classes.push({
                "expanded"                                              : props.isExpanded === true
        });
        if(this.set[Features.MenuStyle]) classes.push({
                "simple"                                                : props.isSimple === true,
                "nested"                                                : props.isNested === true,
                "icon-top"                                              : props.iconTop === true
        });
        if(this.set[Features.Icon]) classes.push({
                ["fi-"+props.icon]                                      : _isString(props.icon)
        });
        if(this.set[Features.RowStyle]) classes.push({
                "row"                                                   : true,
                "column"                                                : props.isColumn === true
        });
        if(this.set[Features.ColumnStyle]) classes.push({
                [Size.Small+"-"+props.small]                            : !_isUndefined(props.small),
                [Size.Medium+"-"+props.medium]                          : !_isUndefined(props.medium),
                [Size.Large+"-"+props.large]                            : !_isUndefined(props.large),
                [Size.XLarge+"-"+props.xlarge]                          : !_isUndefined(props.xlarge),
                [Size.XXLarge+"-"+props.xxlarge]                        : !_isUndefined(props.xxlarge),
                [pairToClass(props.offsetOn)]                           : _isArray(props.offsetOn),
                "columns"                                               : true
        });
        if(this.set[Features.Gutters]) classes.push({
                [Gutters.Collapse]                                      : props.collapse === true,
                [mediaToClass(props.collapseOn, Gutters.Collapse)]      : !_isUndefined(props.collapseOn),
                [mediaToClass(props.uncollapseOn, Gutters.Uncollapse)]  : !_isUndefined(props.uncollapseOn)
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
    getAttrs(props) {
        let attrs = {};
        if(this.set[Features.Disabled]) _assign(attrs, {
                disabled        : props.disabled
        });
        if(this.set[Features.MouseEvents]) _assign(attrs, {
                onClick         : props.onClick
        });
        if(this.set[Features.DataEvents]) _assign(attrs, {
                onChange        : props.onChange
        });
        if(this.set[Features.InputField]) _assign(attrs, {
                value           : props.value
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
                float           : oneOfList(Alignment)
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
                alignment       : oneOfList(Alignment)
        });
        if(this.set[Features.Active]) _assign(propTypes, {       
                isActive        : PropTypes.bool
        });
        if(this.set[Features.Orientation]) _assign(propTypes, {  
                orientation     : oneOfList(Orientation)
        });
        if(this.set[Features.ContentExpand]) _assign(propTypes, {
                isExpanded      : PropTypes.bool
        });
        if(this.set[Features.MenuStyle]) _assign(propTypes, {    
                isSimple        : PropTypes.bool,    
                isNested        : PropTypes.bool,    
                iconTop         : PropTypes.bool
        });
        if(this.set[Features.Icon]) _assign(propTypes, {         
                icon            : PropTypes.string
        });
        if(this.set[Features.RowStyle]) _assign(propTypes, {     
                isColumn        : PropTypes.bool
        });
        if(this.set[Features.Gutters]) _assign(propTypes, {      
                collapse        : PropTypes.bool,
                collapseOn      : PropTypes.oneOfType([oneOfList(Size), PropTypes.arrayOf(oneOfList(Size))]),
                uncollapseOn    : PropTypes.oneOfType([oneOfList(Size), PropTypes.arrayOf(oneOfList(Size))])
        });
        if(this.set[Features.ColumnStyle]) _assign(propTypes, {
                small           : PropTypes.number,
                medium          : PropTypes.number,
                large           : PropTypes.number,
                xlarge          : PropTypes.number,
                xxlarge         : PropTypes.number,
                offsetOn        : PropTypes.arrayOf(PropTypes.oneOf([oneOfList(Size), PropTypes.number, PropTypes.arrayOf([oneOfList(Size), PropTypes.number])]))
        });
        return propTypes;
    }
    getDefaultProps(defaultProps = {}) {
        if(this.set[Features.Float]) _assign(defaultProps, {
                float           : Alignment.None
        });
        if(this.set[Features.Disabled]) _assign(defaultProps, {
                disabled        : false
        });
        if(this.set[Features.InputField]) _assign(defaultProps, {
                label           : null
        });
        if(this.set[Features.Alignment]) _assign(defaultProps, {
                alignment       : Alignment.None
        });
        if(this.set[Features.Orientation]) _assign(defaultProps, {
                orientation     : Orientation.Default
        });
        return defaultProps;
    }
}