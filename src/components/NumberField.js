import React, { PropTypes } from 'react';
import { NumberField as featureSet } from '../utils/componentFeatures';

class NumberField extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { label, value, max, ...props } = this.props;
        return (
            <div className={featureSet.getOuterClassNames(props)}>
                <label>
                    {label}
                    <input  className={featureSet.getInnerClassNames(props, "input-group-field")}
                            type="number"
                            value={value}
                            min={1}
                            max={max}
                            {...featureSet.getAttrs(props)}/>
                </label>
            </div>
        );
    }
}
NumberField.propTypes = featureSet.getPropTypes({
    label: PropTypes.string.isRequired,
    value: PropTypes.number,
    max: PropTypes.number
});
NumberField.defaultProps = featureSet.getDefaultProps({
    value: 0
});

export default NumberField;