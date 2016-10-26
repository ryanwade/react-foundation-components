import React, { PropTypes } from 'react';
import { TextField as featureSet } from '../utils/componentFeatures';

class TextField extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { label, value, ...props } = this.props;
        return (
            <div className={featureSet.getOuterClassNames(props, 'input-group')}>
                <span   className="input-group-label">{label}</span>
                <input  className={featureSet.getInnerClassNames(props, "input-group-field")}
                        type="text"
                        value={value}
                        {...featureSet.getAttrs(props)}/>
            </div>
        );
    }
}
TextField.propTypes = featureSet.getPropTypes({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
});
TextField.defaultProps = featureSet.getDefaultProps({
});

export default TextField;