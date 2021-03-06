import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavbarNav extends Component {
  render() {
    const { children, alignItems } = this.props;
    return (
      <ul className={`navbar-nav ${alignItems === 'right' ? 'ml-auto' : 'mr-auto'}`}>{children}</ul>
    );
  }
}

NavbarNav.propTypes = {
  /**
   * Position of items. Can be <code>'left'</code> or <code>'right'</code>
   */
  alignItems: PropTypes.string,
  /**
   * Elements show into NavbarNav
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
NavbarNav.defaultProps = {
  alignItems: 'left',
  children: null
};

export default NavbarNav;
