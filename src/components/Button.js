import React, { PropTypes } from 'react';
import { Button as featureSet } from '../utils/componentFeatures';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { label, children } = this.props;
        return (
            <div className={featureSet.getClassNames(this)}>
                <button type="button"
                        className="button"
                        {...featureSet.getAttrs(this)}>
                        {label || children}
                </button>
            </div>
        );
    }
}
Button.propTypes = featureSet.getPropTypes({
    label: PropTypes.string,
    children: PropTypes.node
});
Button.defaultProps = featureSet.getDefaultProps({
});

export default Button;