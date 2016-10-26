import { PropTypes } from 'react';
import classNames from 'classnames';

export const Features = {
    ClassNames: "ClassNames",
    Visibility: "Visibility",
    Disabled: "Disabled",
    MouseEvents: "MouseEvents",
    DataEvents: "DataEvents",
    Float: "Float"
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
        return propTypes;
    }
    getDefaultProps(defaultProps) {
        if(this.set[Features.Visibility]) {
            defaultProps.show = true;
        }
        if(this.set[Features.Float]) {
            defaultProps.float = null; 
        }
        if(this.set[Features.Disabled]) {
            defaultProps.disabled = false;
        }
        return defaultProps;
    }
}