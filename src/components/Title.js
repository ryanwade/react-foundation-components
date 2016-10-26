import React, { PropTypes } from 'react';
import { Title as featureSet } from '../utils/componentFeatures';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { text } = this.props;
        return (
            <div className={featureSet.getOuterClassNames(this)}>
                <h3 className={featureSet.getInnerClassNames(this, "rock-salt")}>
                    {text}</h3>
            </div>
        );
    }
}
Title.propTypes = featureSet.getPropTypes({
    text: PropTypes.string.isRequired
});
Title.defaultProps = featureSet.getDefaultProps({

});

export default Title;