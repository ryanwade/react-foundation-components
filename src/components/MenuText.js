import React, { PropTypes } from 'react';
import { MenuText as featureSet } from '../utils/componentFeatures';

class MenuText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {text, ...props} = this.props;
        return (
            <li className={featureSet.getOuterClassNames(props, "menu-text")}>
                {text}
            </li>
        );
    }
}
MenuText.propTypes = featureSet.getPropTypes({
    text: PropTypes.string
});
MenuText.defaultProps = featureSet.getDefaultProps({
    text: null
});

export default MenuText;