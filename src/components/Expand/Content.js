import React, { PropTypes } from 'react';
import { ExpandContent as featureSet } from '../../utils/componentFeatures';

const ExpandContent = ({ children, ...props}) => (
    <div className={featureSet.getClassNames(props, "row callout expand-content")}>
        {children}
    </div>
);
ExpandContent.propTypes = featureSet.getPropTypes({
    children: PropTypes.node
});
ExpandContent.defaultProps = featureSet.getDefaultProps();

export default ExpandContent;