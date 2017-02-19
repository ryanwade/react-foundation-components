import React from 'react';
import { TabsTitle as featureSet } from '../utils/componentFeatures';


const TabsTitle = ({ label, ...props }) => {
    return (
        <li className={featureSet.getClassNames(props, "tabs-title")}>
            <a {...featureSet.getAttrs(props)}>{label}</a>
        </li>
    );
};
TabsTitle.propTypes = featureSet.getPropTypes();
TabsTitle.defaultProps = featureSet.getDefaultProps();

export default TabsTitle;