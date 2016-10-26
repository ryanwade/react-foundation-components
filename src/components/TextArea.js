import React from 'react';
import { TextArea as featureSet } from '../utils/componentFeatures';
import InputField from './InputField';

class TextArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let props = this.props;
        return (
            <InputField className={featureSet.getOuterClassNames(props)} input={props}>
                <textarea   className={featureSet.getInnerClassNames(props)}
                            {...featureSet.getAttrs(props)} />
            </InputField>
        );
    }
}
TextArea.propTypes = featureSet.getPropTypes();
TextArea.defaultProps = featureSet.getDefaultProps();

export default TextArea;