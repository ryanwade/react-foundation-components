import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Button as featureSet } from '../utils/componentFeatures';

const Button = ({ color, label, children, ...props }, context) => (
    <button type="button"
            className={featureSet.getClassNames(props, classNames("button", color))}
            {...featureSet.getAttrs(props, context)}>
            {label || children}
    </button>
);
Button.propTypes = featureSet.getPropTypes({
    color: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node
});
Button.defaultProps = featureSet.getDefaultProps();
Button.context = featureSet.getContext();

export default Button;