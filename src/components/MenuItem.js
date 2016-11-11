import React, { PropTypes } from 'react';
import { MenuItem as featureSet } from '../utils/componentFeatures';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {label, icon, ...props} = this.props;
        return (
            <li className={featureSet.getOuterClassNames(props)}>
                <a href="#">{icon}<span>{label}</span></a>
            </li>
        );
    }
}
MenuItem.propTypes = featureSet.getPropTypes({
    label: PropTypes.string,
    icon: PropTypes.node
});
MenuItem.defaultProps = featureSet.getDefaultProps({
    label: null
});

export default MenuItem;