import React from 'react';
import { TabsContent as featureSet } from '../utils/componentFeatures';


const TabsContent = ({ children, ...props }) => {
    return (
        <div className={featureSet.getClassNames(props, "tabs-content")}>
            <div className="tabs-panel is-active">
                {children}
            </div>
        </div>
    );
};
TabsContent.propTypes = featureSet.getPropTypes();
TabsContent.defaultProps = featureSet.getDefaultProps();

export default TabsContent;