import React, { PropTypes } from 'react';
import { Row as featureSet } from '../utils/componentFeatures';

const Row = ({children, ...props}) => (
    <div className={featureSet.getClassNames(props)}>
        {children}
    </div>
);
Row.propTypes = featureSet.getPropTypes({
    children: PropTypes.node
});
Row.defaultProps = featureSet.getDefaultProps();

export default Row;