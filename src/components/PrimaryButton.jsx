import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
// import { Transition } from '@headlessui/react';

function Component({ children, to }) {
  return (
    <Link
      to={to}
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 ring-offset-gray-800 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
    >
      {children}
    </Link>
  );
}

Component.defaultProps = {
  to: '/',
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  to: PropTypes.string,
};

export default Component;
