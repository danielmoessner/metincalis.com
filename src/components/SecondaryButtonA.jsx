import React from 'react';
import PropTypes from 'prop-types';

function Component({ children, href }) {
  return (
    <a
      href={href}
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 ring-offset-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {children}
    </a>
  );
}

Component.defaultProps = {
  href: '',
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  href: PropTypes.string,
};

export default Component;
