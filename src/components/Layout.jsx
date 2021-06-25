import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navigation from './Navigation';

function Layout({ children, overflowHidden }) {
  return (
    <div className="relative">
      <Navigation />
      <main className={overflowHidden ? 'overflow-hidden' : ''}>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  overflowHidden: false,
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  overflowHidden: PropTypes.bool,
};

export default Layout;
