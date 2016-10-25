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

        this.getClassNames      = this.getClassNames.bind(this);
        this.getAttrs           = this.getAttrs.bind(this);
        this.getDefaultProps    = this.getDefaultProps.bind(this);
        this.getPropTypes       = this.getPropTypes.bind(this);
    }
    getClassNames(ref, extraClasses) {
        let myClassNames = extraClasses;
        if(this.set[Features.ClassNames]) {
            classNames(
                myClassNames,
                ref.props.className
            );
        }
        if(this.set[Features.Visibility]) {
            myClassNames = classNames(myClassNames, {
                "show": ref.props.show,
                "hide": !ref.props.show
            });
        }
        if(this.set[Features.Float]) {
            myClassNames = classNames(myClassNames, {
                ["float-"+ref.props.float]: ref.props.float
            });
        }
        return myClassNames;
    }
    getAttrs(ref) {
        let attrs = {};
        if(this.set[Features.Disabled]) {
            attrs.disabled = ref.props.disabled;
        }
        if(this.set[Features.MouseEvents]) {
            attrs.onClick = ref.props.onClick;
        }
        if(this.set[Features.DataEvents]) {
            attrs.onChange = ref.props.onChange;
        }
        return attrs;
    }
    getPropTypes(propTypes = {}) {
        if(this.set[Features.ClassNames]) {
            propTypes.className = PropTypes.string;
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