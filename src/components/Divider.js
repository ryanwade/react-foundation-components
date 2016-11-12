import React, { PropTypes } from 'react';
import { Divider as featureSet } from '../utils/componentFeatures';

const Divider = ({ height, line, ...props }) => {
    if(line) {
        return (
            <div className={featureSet.getClassNames(props)}>
                <div style={{height: height + 'px'}}></div>
                <hr/>
                <div style={{height: height + 'px'}}></div>
            </div>
        );
    }
    return (
        <div className={featureSet.getClassNames(props)}>
            <div style={{height: height + 'px'}}></div>
        </div>
    );
};
Divider.propTypes = featureSet.getPropTypes({
    height: PropTypes.number,
    line: PropTypes.bool
});
Divider.defaultProps = featureSet.getDefaultProps({
    height: 25,
    line: false
});

export default Divider;