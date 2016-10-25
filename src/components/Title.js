import React, { PropTypes } from 'react';
import FeatureSet from '../utils/FeatureSet';

let featureSet = new FeatureSet({
    Visibility: true
});

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { text } = this.props;
        return (
            <div className={featureSet.getClassNames(this)}>
                <h3 className="rock-salt">{text}</h3>
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