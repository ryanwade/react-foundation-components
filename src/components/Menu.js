import React, { PropTypes } from 'react';
import { Menu as featureSet } from '../utils/componentFeatures';

const Menu = ({children, ...props}) => (
    <ul className={featureSet.getClassNames(props,"menu")}>
        {children}
    </ul>
);
Menu.propTypes = featureSet.getPropTypes({
    children: PropTypes.node
});
Menu.defaultProps = featureSet.getDefaultProps();

export default Menu;