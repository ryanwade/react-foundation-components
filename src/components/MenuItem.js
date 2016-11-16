import React, { PropTypes } from 'react';
import { MenuItem as featureSet } from '../utils/componentFeatures';

const MenuItem = ({label, children, ...props}, context) => (
    <li className={featureSet.getClassNames(props)}>
        <a href="#" {...featureSet.getAttrs(props, context)}>
            {children}<span>{label}</span>
        </a>
    </li>
);
MenuItem.propTypes = featureSet.getPropTypes({
    label: PropTypes.string,
    icon: PropTypes.node
});
MenuItem.defaultProps = featureSet.getDefaultProps({
    label: null
});
MenuItem.contextTypes = featureSet.getContextTypes();

export default MenuItem;