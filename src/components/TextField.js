import React, { PropTypes } from 'react';
import { TextField as featureSet } from '../utils/componentFeatures';

class TextField extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { label, value } = this.props;
        return (
            <div className={featureSet.getClassNames(this, 'input-group')}>
                <span   className="input-group-label">{label}</span>
                <input  className="input-group-field"
                        type="text"
                        value={value}
                        {...featureSet.getAttrs(this)}/>
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