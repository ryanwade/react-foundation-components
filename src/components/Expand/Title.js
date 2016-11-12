import React, { PropTypes } from 'react';
import { ExpandTitle as featureSet } from '../../utils/componentFeatures';

const ExpandTitle = ({children, show, ...props}) => (
    <div className={featureSet.getClassNames(props,"row callout expand-content")}
            {...featureSet.getAttrs(props)}>
            {children}
            <div    className={featureSet.getInnerClassNames(props,"is-accordion-submenu-parent")}
                    aria-expanded={show}
                    style={{position: 'absolute', bottom: '15px', right: '0px'}}>
                    <a></a>
            </div>
    </div>
);
ExpandTitle.propTypes = featureSet.getPropTypes({
    children: PropTypes.node,
    show: PropTypes.bool
});
ExpandTitle.defaultProps = featureSet.getDefaultProps();

export default ExpandTitle;