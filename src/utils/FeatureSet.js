import { PropTypes } from 'react';
import classNames from 'classnames';

import { Alignment, Orientation } from './enums';

import _values from 'lodash/values';
import _pickBy from 'lodash/pickBy';
import _isUndefined from 'lodash/isUndefined';
import _assign from 'lodash/assign';

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
    Icon:           "Icon"
};

function oneOfList(obj) {
    return PropTypes.oneOf(_values(obj));
}
function clean(obj) {
    return _pickBy(obj, (o) => !_isUndefined(o));
}
export class FeatureSet {
    constructor(set = {}) {
        this.set = set;

        this.getOuterClassNames = this.getOuterClassNames.bind(this);
        this.getInnerClassNames = this.getInnerClassNames.bind(this);
        this.getAttrs           = this.getAttrs.bind(this);
        this.getDefaultProps    = this.getDefaultProps.bind(this);
        this.getPropTypes       = this.getPropTypes.bind(this);
    }
    getOuterClassNames(props, extraClasses) {
        return classNames({
            [extraClasses]              : true,
            [props.outerClassName]      : this.set[Features.ClassNames],
            [props.className]           : this.set[Features.ClassNames],
            "show"                      : this.set[Features.Visibility]         &&  props.show,
            "hide"                      : this.set[Features.Visibility]         && !props.show,
            ["float-"+props.float]      : this.set[Features.Float]              &&  props.float,
            ["align-"+props.alignment]  : this.set[Features.Alignment]          &&  props.alignment,
            "active"                    : this.set[Features.Active]             &&  props.isActive, 
            [props.orientation]         : this.set[Features.Orientation],
            "expanded"                  : this.set[Features.ContentExpand]      &&  props.isExpanded,
            "simple"                    : this.set[Features.MenuStyle]          &&  props.isSimple,
            "nested"                    : this.set[Features.MenuStyle]          &&  props.isNested,
            "icon-top"                  : this.set[Features.MenuStyle]          &&  props.iconTop,
            ["fi-"+props.icon]          : this.set[Features.Icon]               &&  props.icon
        });
    }
    getInnerClassNames(props, extraClasses) {
        return classNames({
            [extraClasses]              : true,
            [props.innerClassName]      : this.set[Features.ClassNames],
            "input-group-field"         : this.set[Features.InputField]     && props.isInline
        });
    }
    getAttrs(props) {
        return {
            disabled        : this.set[Features.Disabled]       ? props.disabled                    : undefined,
            onClick         : this.set[Features.MouseEvents]    ? props.onClick                     : undefined,
            onChange        : this.set[Features.DataEvents]     ? props.onChange                    : undefined,
            value           : this.set[Features.InputField]     ? props.value                       : undefined
        };
    }
    getPropTypes(propTypes = {}) {
        return _assign(propTypes, clean({
            outerClassName  : this.set[Features.ClassNames]     ? PropTypes.string                  : undefined,
            innerClassName  : this.set[Features.ClassNames]     ? PropTypes.string                  : undefined,
            show            : this.set[Features.Visibility]     ? PropTypes.bool                    : undefined,
            float           : this.set[Features.Float]          ? oneOfList(Alignment)              : undefined,
            disabled        : this.set[Features.Disabled]       ? PropTypes.bool                    : undefined,
            onClick         : this.set[Features.MouseEvents]    ? PropTypes.func                    : undefined,
            onChange        : this.set[Features.DataEvents]     ? PropTypes.func                    : undefined,
            value           : this.set[Features.InputField]     ? this.set[Features.InputField]     : undefined,
            label           : this.set[Features.InputField]     ? PropTypes.string                  : undefined,
            isInline        : this.set[Features.InputField]     ? PropTypes.bool                    : undefined,
            alignment       : this.set[Features.Alignment]      ? oneOfList(Alignment)              : undefined,
            isActive        : this.set[Features.Active]         ? PropTypes.bool                    : undefined,
            orientation     : this.set[Features.Orientation]    ? oneOfList(Orientation)            : undefined,
            isExpanded      : this.set[Features.ContentExpand]  ? PropTypes.bool                    : undefined,
            isSimple        : this.set[Features.MenuStyle]      ? PropTypes.bool                    : undefined,
            isNested        : this.set[Features.MenuStyle]      ? PropTypes.bool                    : undefined,
            iconTop         : this.set[Features.MenuStyle]      ? PropTypes.bool                    : undefined,
            icon            : this.set[Features.Icon]           ? PropTypes.string                  : undefined
        }));
    }
    getDefaultProps(defaultProps = {}) {
        return _assign(defaultProps, clean({
            show            : this.set[Features.Visibility]     ? true                              : undefined,
            float           : this.set[Features.Float]          ? Alignment.None                    : undefined,
            disabled        : this.set[Features.Disabled]       ? false                             : undefined,
            isInline        : this.set[Features.InputField]     ? false                             : undefined,
            label           : this.set[Features.InputField]     ? null                              : undefined,
            alignment       : this.set[Features.Alignment]      ? Alignment.None                    : undefined,
            isActive        : this.set[Features.Active]         ? false                             : undefined,
            orientation     : this.set[Features.Orientation]    ? Orientation.Default               : undefined,
            isExpanded      : this.set[Features.ContentExpand]  ? false                             : undefined,
            isSimple        : this.set[Features.MenuStyle]      ? false                             : undefined,
            isNested        : this.set[Features.MenuStyle]      ? false                             : undefined,
            iconTop         : this.set[Features.MenuStyle]      ? false                             : undefined,
            icon            : this.set[Features.Icon]           ? null                              : undefined
        }));
    }
}