import React from 'react';
import { Tabs as featureSet } from '../utils/componentFeatures';


const Tabs = ({ children, ...props }) => {
    return (
        <ul className={featureSet.getClassNames(props, "tabs")}>
            {children}
        </ul>
    );
};
Tabs.propTypes = featureSet.getPropTypes();
Tabs.defaultProps = featureSet.getDefaultProps();

export default Tabs;