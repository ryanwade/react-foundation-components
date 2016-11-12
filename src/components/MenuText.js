import React, { PropTypes } from 'react';
import { MenuText as featureSet } from '../utils/componentFeatures';

const MenuText = ({text, ...props}) => (
    <li className={featureSet.getClassNames(props, "menu-text")}>
        {text}
    </li>
);
MenuText.propTypes = featureSet.getPropTypes({
    text: PropTypes.string
});
MenuText.defaultProps = featureSet.getDefaultProps({
    text: null
});

export default MenuText;