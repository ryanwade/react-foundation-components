import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Button as featureSet } from '../utils/componentFeatures';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { color, label, children } = this.props;
        return (
            <div className={featureSet.getOuterClassNames(this)}>
                <button type="button"
                        className={featureSet.getInnerClassNames(this, classNames("button", color))}
                        {...featureSet.getAttrs(this)}>
                        {label || children}
                </button>
            </div>
        );
    }
}
Button.propTypes = featureSet.getPropTypes({
    color: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node
});
Button.defaultProps = featureSet.getDefaultProps({
});

export default Button;