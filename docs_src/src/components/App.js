import React, { PropTypes } from 'react';
//import { Link, IndexLink } from 'react-router';
import { Components } from 'react-foundation-lib';

let { Menu, MenuItem } = Components;

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <Menu alignRight>
          <MenuItem link="/react-foundation-components/" label="Home"/>
          <MenuItem link="/react-foundation-components/about" label="About"/>
        </Menu>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
