import { PropTypes } from 'react';
import classNames from 'classnames';

export const Features = {
    ClassNames: "ClassNames",
    Visibility: "Visibility",
    Disabled: "Disabled",
    MouseEvents: "MouseEvents",
    DataEvents: "DataEvents",
    Float: "Float",
    InputField: "InputField",
    Alignment: "Alignment"
};

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
        let outerClassNames = extraClasses;
        if(this.set[Features.ClassNames]) {
            outerClassNames = classNames(
                outerClassNames,
                props.outerClassName,
                props.className
            );
        }
        if(this.set[Features.Visibility]) {
            outerClassNames = classNames(outerClassNames, {
                "show": props.show,
                "hide": !props.show
            });
        }
        if(this.set[Features.Float]) {
            outerClassNames = classNames(outerClassNames, {
                ["float-"+props.float]: props.float
            });
        }
        if(this.set[Features.Alignment]) {
            outerClassNames = classNames(outerClassNames, {
                ["align-"+props.alignment]: props.alignment
            });
        }
        return outerClassNames;
    }
    getInnerClassNames(props, extraClasses) {
        let innerClassNames = extraClasses;
        if(this.set[Features.ClassNames]) {
            innerClassNames = classNames(
                innerClassNames,
                props.innerClassName
            );
        }
        if(this.set[Features.InputField] && props.isInline) {
            innerClassNames = classNames(
                innerClassNames,
                "input-group-field"
            );
        }
        return innerClassNames;
    }
    getAttrs(props) {
        let attrs = {};
        if(this.set[Features.Disabled]) {
            attrs.disabled = props.disabled;
        }
        if(this.set[Features.MouseEvents]) {
            attrs.onClick = props.onClick;
        }
        if(this.set[Features.DataEvents]) {
            attrs.onChange = props.onChange;
        }
        if(this.set[Features.InputField]) {
            attrs.value = props.value;
        }
        return attrs;
    }
    getPropTypes(propTypes = {}) {
        if(this.set[Features.ClassNames]) {
            propTypes.outerClassName = PropTypes.string;
            propTypes.innerClassName = PropTypes.string;
        }
        if(this.set[Features.Visibility]) {
            propTypes.show = PropTypes.bool;
        }
        if(this.set[Features.Float]) {
            propTypes.float = PropTypes.string;
        }
        if(this.set[Features.Disabled]) {
            propTypes.disabled = PropTypes.bool;
        }
        if(this.set[Features.MouseEvents]) {
            propTypes.onClick = PropTypes.func;
        }
        if(this.set[Features.DataEvents]) {
            propTypes.onChange = PropTypes.func;
        }
        if(this.set[Features.InputField]) {
            propTypes.value = this.set[Features.InputField];
            propTypes.label = PropTypes.string;
            propTypes.isInline = PropTypes.bool;
        }
        if(this.set[Features.Alignment]) {
            propTypes.alignment = PropTypes.string;
        }
        return propTypes;
    }
    getDefaultProps(defaultProps = {}) {
        if(this.set[Features.Visibility]) {
            defaultProps.show = true;
        }
        if(this.set[Features.Float]) {
            defaultProps.float = null; 
        }
        if(this.set[Features.Disabled]) {
            defaultProps.disabled = false;
        }
        if(this.set[Features.InputField]) {
            defaultProps.isInline = false;
            defaultProps.label = null;
        }
        if(this.set[Features.Alignment]) {
            defaultProps.alignment = null;
        }
        return defaultProps;
    }
}