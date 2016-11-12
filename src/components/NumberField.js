import React, { PropTypes } from 'react';
import { NumberField as featureSet } from '../utils/componentFeatures';
import InputField from './InputField';

const NumberField = ({ max, ...props }) => (
    <InputField className={featureSet.getOuterClassNames(props)} input={props}>
        <input  className={featureSet.getInnerClassNames(props)}
                type="number"
                min={1}
                max={max}
                {...featureSet.getAttrs(props)}/>
    </InputField>
);
NumberField.propTypes = featureSet.getPropTypes({
    max: PropTypes.number
});
NumberField.defaultProps = featureSet.getDefaultProps();

export default NumberField;