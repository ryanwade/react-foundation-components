import React from 'react';

import _isArray from 'lodash/isArray';
/*
 * UI Builder Class
 */ 
class UI_Builder {
    constructor(Components = {}, FunctionAttrs_Builder = () => null) {
        this.Components = Components;
        this.FunctionAttrs_Builder = FunctionAttrs_Builder;

        this.build = this.build.bind(this);
        this.Pane_Builder = this.Pane_Builder.bind(this);
        this.Component_Builder = this.Component_Builder.bind(this);
        this.DynamicAttrs_Builder = this.DynamicAttrs_Builder.bind(this);
    }

    /*
    * Construct UI from Redux state
    */
    build({ root, panes} = {root: null, panes: {}}) {
        if(root === null) return null;
        return this.Pane_Builder(panes, root);
    }
    /*
    * Build Pane from Pane ID
    */
    Pane_Builder(panes = {}, id = null) {
        let Pane = panes[id];
        if(id === null || Pane === undefined) return null;
        return this.Component_Builder(panes, Pane.components, Pane.root);
    }
    /*
    * Build Component(s) from Component ID(s)
    */
    Component_Builder(panes = {}, components = {}, ids = []) {
        ids = _isArray(ids)? ids : [ids];
        return ids.map(id => {
            let Component = components[id];
            if(id === null || Component === undefined) return null;
            let result = null;
            let ReactComponent = null;
            switch(Component.type) {
                case "pane":
                    return this.Pane_Builder(panes, Component.id);
                default:
                    ReactComponent = this.Components[Component.type] || Component.type;
                    result = (
                        <ReactComponent key={id} {...Component.attrs} {...this.DynamicAttr_Builder(panes, components, Component.dynamic)} {...this.FunctionAttr_Builder(Component.actions)}>
                            {Component.content}
                            {this.Component_Builder(panes, components, Component.children)}
                        </ReactComponent>
                    );
                    return result;
            }
        });
    }

    /*
    * Build Attrs which are comprised of components
    */
    DynamicAttrs_Builder(panes = {}, components = {}, attrs = {}) {
        let ret = {};
        Object.keys(attrs).map(attr => {
            ret[attr] = this.Component_Builder(panes, components, attrs[attr]);
        });
        return ret;
    }
}



export default UI_Builder;