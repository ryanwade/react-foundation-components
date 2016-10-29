import React, { PropTypes } from 'react';
import { Expand as featureSet } from '../../utils/componentFeatures';
import ExpandTitle from './ExpandTitle.js';
import ExpandContent from './ExpandContent.js';

class Expand extends React.Component {
    constructor(props) {
        super(props);
        this.renderChildren = this.renderChildren.bind(this);
    }
    renderChildren(children) {
        let {show = false} = this.state || {};

        return React.Children.map(children, child => {
            if (child.type === ExpandTitle) {
                //set show state on ExpandTitle
                return React.cloneElement(child, {
                    toggleState: () => {
                        this.setState({show: !show});
                    },
                    show
                });
            }
            else if(child.type === ExpandContent) {
                //set Visibility on ExpandContent
                return React.cloneElement(child, {
                    show
                });
            }
            else {
                return child;
            }
        });
    }

    render() {
        let {children, ...props} = this.props;
        return (
            <div className={featureSet.getOuterClassNames(props, "expand")}>
                {this.renderChildren(children)}
            </div>
        );
    }
}
Expand.propTypes = featureSet.getPropTypes({
    children: PropTypes.node
});
Expand.defaultProps = featureSet.getDefaultProps();

export default Expand;