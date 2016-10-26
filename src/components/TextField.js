import React from 'react';
import { TextField as featureSet } from '../utils/componentFeatures';
import InputField from './InputField';

class TextField extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let props = this.props;
        return (
            <InputField className={featureSet.getOuterClassNames(props)} input={props}>
                <input  className={featureSet.getInnerClassNames(props)}
                        type="text"
                        {...featureSet.getAttrs(props)}/>
            </InputField>
        );
    }
}
TextField.propTypes = featureSet.getPropTypes();
TextField.defaultProps = featureSet.getDefaultProps();

export default TextField;