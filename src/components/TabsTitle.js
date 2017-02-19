import React from 'react';
import { TabsTitle as featureSet } from '../utils/componentFeatures';


const TabsTitle = ({ label, ...props }) => {
    return (
        <li className={featureSet.getClassNames(props, "tabs-title")}>
            {label}
        </li>
    );
};
TabsTitle.propTypes = featureSet.getPropTypes();
TabsTitle.defaultProps = featureSet.getDefaultProps();

export default TabsTitle;