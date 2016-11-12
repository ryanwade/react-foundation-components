import { PropTypes } from 'react';
import classNames from 'classnames';

import { Alignment, Orientation } from './enums';

export const Features = {
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
    Expanded: "Expanded",
    Simple: "Simple",
    Nested: "Nested",
    Icon: "Icon",
    IconTop: "IconTop"
};

function oneOfList(obj) {
    return PropTypes.oneOf(Object.keys(obj).map(key => obj[key]));
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
            extraClasses,
            [props.outerClassName]      : this.set[Features.ClassNames],
            [props.className]           : this.set[Features.ClassNames],
            "show"                      : this.set[Features.Visibility]     &&  props.show,
            "hide"                      : this.set[Features.Visibility]     && !props.show,
            ["float-"+props.float]      : this.set[Features.Float]          &&  props.float,
            ["align-"+props.alignment]  : this.set[Features.Alignment]      &&  props.alignment,
            "active"                    : this.set[Features.Active]         &&  props.isActive, 
            [props.orientation]         : this.set[Features.Orientation],
            "expanded"                  : this.set[Features.Expanded]       &&  props.isExpanded,
            "simple"                    : this.set[Features.Simple]         &&  props.isSimple,
            "nested"                    : this.set[Features.Nested]         &&  props.isNested,
            ["fi-"+props.icon]          : this.set[Features.Icon]           &&  props.icon,
            "icon-top"                  : this.set[Features.IconTop]        &&  props.iconTop
        });
    }
    getInnerClassNames(props, extraClasses) {
        return classNames({
            extraClasses,
            [props.innerClassName]      : this.set[Features.ClassNames],
            "input-group-field"         : this.set[Features.InputField]     && props.isInline
        });
    }
    getAttrs(props) {
        return classNames({
            disabled        : this.set[Features.Disabled]       ? props.disabled                    : undefined,
            onClick         : this.set[Features.MouseEvents]    ? props.onClick                     : undefined,
            onChange        : this.set[Features.DataEvents]     ? props.onChange                    : undefined,
            value           : this.set[Features.InputField]     ? props.value                       : undefined
        });
    }
    getPropTypes(propTypes = {}) {
        Object.assign(propTypes, {
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
            isExpanded      : this.set[Features.Expanded]       ? PropTypes.bool                    : undefined,
            isSimple        : this.set[Features.Simple]         ? PropTypes.bool                    : undefined,
            isNested        : this.set[Features.Nested]         ? PropTypes.bool                    : undefined,
            icon            : this.set[Features.Icon]           ? PropTypes.string                  : undefined,
            iconTop         : this.set[Features.IconTop]        ? PropTypes.bool                    : undefined
        });
    }
    getDefaultProps(defaultProps = {}) {
        Object.assign(defaultProps, {
            show            : this.set[Features.Visibility]     ? true                              : undefined,
            float           : this.set[Features.Float]          ? Alignment.None                    : undefined,
            disabled        : this.set[Features.Disabled]       ? false                             : undefined,
            isInline        : this.set[Features.InputField]     ? false                             : undefined,
            label           : this.set[Features.InputField]     ? null                              : undefined,
            alignment       : this.set[Features.Alignment]      ? Alignment.None                    : undefined,
            isActive        : this.set[Features.Active]         ? false                             : undefined,
            orientation     : this.set[Features.Orientation]    ? Orientation.Default               : undefined,
            isExpanded      : this.set[Features.Expanded]       ? false                             : undefined,
            isSimple        : this.set[Features.Simple]         ? false                             : undefined,
            isNested        : this.set[Features.Nested]         ? false                             : undefined,
            icon            : this.set[Features.Icon]           ? null                              : undefined,
            iconTop         : this.set[Features.IconTop]        ? false                             : undefined
        });
    }
}