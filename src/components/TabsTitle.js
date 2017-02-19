import React from 'react';
import { TabsTitle as featureSet } from '../utils/componentFeatures';


const TabsTitle = ({ label, ...props }) => {
    return (
        <ul className={featureSet.getClassNames(props, "tabs-title")}>
            {label}
        </ul>
    );
};
TabsTitle.propTypes = featureSet.getPropTypes();
TabsTitle.defaultProps = featureSet.getDefaultProps();

export default TabsTitle;