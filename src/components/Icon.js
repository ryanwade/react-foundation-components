import React from 'react';
import { Icon as featureSet } from '../utils/componentFeatures';

const Icon = ({...props}) => (
    <i className={featureSet.getClassNames(props)}></i>
);
Icon.propTypes = featureSet.getPropTypes();
Icon.defaultProps = featureSet.getDefaultProps();

export default Icon;