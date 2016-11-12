import React, { PropTypes } from 'react';
import { Title as featureSet } from '../utils/componentFeatures';

const Title = ({ text, ...props }) => (
    <h3 className={featureSet.getOuterClassNames(props, "title-font")}>{text}</h3>
);
Title.propTypes = featureSet.getPropTypes({
    text: PropTypes.string.isRequired
});
Title.defaultProps = featureSet.getDefaultProps();

export default Title;