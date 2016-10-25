import React, { PropTypes } from 'react';
import { NumberField as featureSet } from '../utils/componentFeatures';

class NumberField extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { label, value, max } = this.props;
        return (
            <div className={featureSet.getClassNames(this)}>
                <label>
                    {label}
                    <input  className="input-group-field"
                            type="number"
                            value={value}
                            min={1}
                            max={max}
                            {...featureSet.getAttrs(this)}/>
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