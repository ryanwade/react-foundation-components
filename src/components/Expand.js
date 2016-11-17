import React, { PropTypes } from 'react';
import { Expand as featureSet } from '../utils/componentFeatures';
import ExpandTitle from './Expand/Title';
import ExpandContent from './Expand/Content';

class Expand extends React.Component {
    constructor(props) {
        super(props);

        this.toggleShow = this.toggleShow.bind(this);
    }
    toggleShow() {
        let {show = false} = this.state || {};
        this.setState({
            show: !show
        });
    }

    render() {
        let {title, content, ...props} = this.props;
        let {show = false} = this.state || {};
        return (
            <div className={featureSet.getClassNames(props, "expand")}>
                <ExpandTitle onClick={this.toggleShow} show={show}>
                    {title}
                </ExpandTitle>
                <ExpandContent show={show}>
                    {content}
                </ExpandContent>
            </div>
        );
    }
}
Expand.propTypes = featureSet.getPropTypes({
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired
});
Expand.defaultProps = featureSet.getDefaultProps();

export default Expand;