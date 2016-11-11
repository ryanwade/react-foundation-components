import React, { PropTypes } from 'react';
import { Menu as featureSet } from '../utils/componentFeatures';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {children, ...props} = this.props;
        return (
            <ul className={featureSet.getOuterClassNames(props,"menu")}>
                {children}
            </ul>
        );
    }
}
Menu.propTypes = featureSet.getPropTypes({
    children: PropTypes.node
});
Menu.defaultProps = featureSet.getDefaultProps();

export default Menu;