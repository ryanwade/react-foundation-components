import React, { PropTypes } from 'react';
import { MenuItem as featureSet } from '../utils/componentFeatures';

const MenuItem = ({label, jump, children, ...props}, context) => (
    <li className={featureSet.getClassNames(props)}>
        <a href={jump} {...featureSet.getAttrs(props, context)}>
            {children}<span>{label}</span>
        </a>
    </li>
);
MenuItem.propTypes = featureSet.getPropTypes({
    label: PropTypes.string,
    jump: PropTypes.string,
    icon: PropTypes.node
});
MenuItem.defaultProps = featureSet.getDefaultProps({
    label: null,
    jump: "#"
});
MenuItem.contextTypes = featureSet.getContextTypes();

export default MenuItem;