import React, { PropTypes } from 'react';
import { TextArea as featureSet } from '../utils/componentFeatures';

class TextArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { label, value, ...props } = this.props;
        return (
            <div className={featureSet.getOuterClassNames(props)}>
                <label>
                    {label}
                    <textarea
                        className={featureSet.getInnerClassNames(props)}
                        value={value}
                        {...featureSet.getAttrs(props)} />
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