import React, { PropTypes } from 'react';
import { MenuItem as featureSet } from '../utils/componentFeatures';

const MenuItem = ({label, icon, ...props}) => (
    <li className={featureSet.getClassNames(props)}>
        <a href="#">{icon}<span>{label}</span></a>
    </li>
);
MenuItem.propTypes = featureSet.getPropTypes({
    label: PropTypes.string,
    icon: PropTypes.node
});
MenuItem.defaultProps = featureSet.getDefaultProps({
    label: null
});

export default MenuItem;