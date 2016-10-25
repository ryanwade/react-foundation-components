import { PropTypes } from 'react';
import classNames from 'classnames';

export default class FeatureSet {
    constructor(features = {}) {
        this.features = features;

        this.getClassNames = this.getClassNames.bind(this);
        this.getDefaultProps = this.getDefaultProps.bind(this);
        this.getPropTypes = this.getPropTypes.bind(this);
    }
    getClassNames(ref, extraClasses) {
        let myClassNames = classNames(
            ref.props.classNames,
            extraClasses
        );
        if(this.features.Visibility) {
            myClassNames = classNames(myClassNames, {
                "show": ref.props.show,
                "hide": !ref.props.show
            });
        }
        if(this.features.Float) {
            myClassNames = classNames(myClassNames, {
                ["float-"+ref.props.float]: ref.props.float
            });
        }
        return myClassNames;
    }
    getPropTypes(propTypes) {
        propTypes.ClassNames = PropTypes.string;
        if(this.features.Visibility) {
            propTypes.show = PropTypes.bool;
        }
        if(this.features.Float) {
            propTypes.float = PropTypes.string;
        }
        return propTypes;
    }

    getDefaultProps(defaultProps) {
        defaultProps.ClassNames = "";
        if(this.features.Visibility) {
            defaultProps.show = true;
        }
        if(this.features.Float) {
            defaultProps.float = null; 
        }
        return defaultProps;
    }
}