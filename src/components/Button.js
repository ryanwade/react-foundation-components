import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Button as featureSet } from '../utils/componentFeatures';

const Button = ({ color, label, children, ...props }) => (
    <button type="button"
            className={featureSet.getOuterClassNames(props, classNames("button", color))}
            {...featureSet.getAttrs(props)}>
            {label || children}
    </button>
);
Button.propTypes = featureSet.getPropTypes({
    color: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node
});
Button.defaultProps = featureSet.getDefaultProps({
});

export default Button;