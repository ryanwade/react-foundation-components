import React, { PropTypes } from 'react';
import { Column as featureSet } from '../utils/componentFeatures';

const Column = ({children, ...props}) => (
    <div className={featureSet.getClassNames(props)}>
        {children}
    </div>
);
Column.propTypes = featureSet.getPropTypes({
    children: PropTypes.node
});
Column.defaultProps = featureSet.getDefaultProps();

export default Column;