import React, { PropTypes } from 'react';
import { MenuItem as featureSet } from '../utils/componentFeatures';

const MenuItem = ({label, icon, ...props}, context) => (
    <li className={featureSet.getClassNames(props)}>
        <a href="#" {...featureSet.getAttrs(props, context)}>
            {icon}<span>{label}</span>
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
MenuItem.context = featureSet.getContext();

export default MenuItem;