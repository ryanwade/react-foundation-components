import React, { PropTypes } from 'react';
import { TextArea as featureSet } from '../utils/componentFeatures';

class TextArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { label, value } = this.props;
        return (
            <div className={featureSet.getClassNames(this)}>
                <label>
                    {label}
                    <textarea
                        value={value}
                        {...featureSet.getAttrs(this)} />
                </label>
            </div>
        );
    }
}
TextArea.propTypes = featureSet.getPropTypes({
    label: PropTypes.string.isRequired,
    value: PropTypes.string
});
TextArea.defaultProps = featureSet.getDefaultProps({
});

export default TextArea;