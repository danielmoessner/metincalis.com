import React from 'react';
import PropTypes from 'prop-types';

function Component({ children, href, styleClass, target }) {
  return (
    <a
      href={href}
      target={target}
      className={`${styleClass} inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
    >
      {children}
    </a>
  );
}

Component.defaultProps = {
  href: '/',
  styleClass: 'ring-offset-gray-800',
  target: '_self',
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  styleClass: PropTypes.string,
};

export default Component;
