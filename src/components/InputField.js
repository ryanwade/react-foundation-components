import React, { PropTypes } from 'react';
import classNames from 'classnames';
class InputField extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { input, className, children } = this.props;
        if(input.label && input.isInline) {
            //children.className="input-group-field" applied on Feature.InputField & props.isInline
            return (
                <div className={classNames(className, 'input-group')}>
                    <span className="input-group-label">{input.label}</span>
                    {children}
                </div>
            );
        }
        if(input.label && !input.isInline) {
            return (
                <div className={className}>
                    <label>
                        {input.label}
                        {children}
                    </label>
                </div>
            );
        }
        return (
            <div className={className}>
                {children}
            </div>
        );
    }
}
InputField.propTypes = {
    input: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default InputField;