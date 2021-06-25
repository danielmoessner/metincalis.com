import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
// import { Transition } from '@headlessui/react';

function Component({ children, to, classes }) {
  return (
    <Link
      to={to}
      className={`${classes} inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
    >
      {children}
    </Link>
  );
}

Component.defaultProps = {
  to: '/',
  classes: 'ring-offset-gray-800',
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  to: PropTypes.string,
  classes: PropTypes.string,
};

export default Component;
