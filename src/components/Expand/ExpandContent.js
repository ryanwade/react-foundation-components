import React, { PropTypes } from 'react';
import { ExpandContent as featureSet } from '../../utils/componentFeatures';


class ExpandContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { children, ...props} = this.props;
        return (
            <div className={featureSet.getOuterClassNames(props, "row callout expand-content")}>
                {children}
            </div>
        );
    }
}
ExpandContent.propTypes = featureSet.getPropTypes({
    children: PropTypes.node
});
ExpandContent.defaultProps = featureSet.getDefaultProps();

export default ExpandContent;