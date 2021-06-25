import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navigation from './Navigation';

function Layout({ children, overflowHidden }) {
  const data = useStaticQuery(graphql`
    {
      global: settingsYaml(slug: { eq: "global" }) {
        provenExpert
      }
    }
  `);
  const { global } = data;

  return (
    <div className="relative">
      <Navigation />
      <main className={overflowHidden ? 'overflow-hidden' : ''}>{children}</main>
      <Footer />
      <div
        className="fixed bottom-10 z-40 right-2 shadow-xl border-blue-600 border-2"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: global.provenExpert }}
      />
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
