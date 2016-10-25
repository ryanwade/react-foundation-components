import React, { PropTypes } from 'react';
import FeatureSet from '../utils/FeatureSet';

let featureSet = new FeatureSet({
    Visibility: true,
    Float: true,
    Disabled: true,
    MouseEvents: true
});

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
    disabled: PropTypes.bool,
    label: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired
});
Button.defaultProps = featureSet.getDefaultProps({
    disabled: false
});

export default Button;