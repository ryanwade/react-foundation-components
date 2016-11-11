import React from 'react';
import { Icon as featureSet } from '../utils/componentFeatures';

class Icon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {...props} = this.props;
        return (
            <i className={featureSet.getOuterClassNames(props)}></i>
        );
    }
}
Icon.propTypes = featureSet.getPropTypes();
Icon.defaultProps = featureSet.getDefaultProps();

export default Icon;