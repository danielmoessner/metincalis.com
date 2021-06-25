import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// import { Transition } from '@headlessui/react';

function Component({ article, button, link }) {
  return (
    <div>
      <Link to={link} className="mt-2 block">
        <h2 className="text-xl font-semibold text-gray-900">{article.title}</h2>
        <p className="mt-3 text-base text-gray-500">{article.description}</p>
      </Link>
      <div className="mt-3">
        <Link to={link} className="text-base font-semibold text-blue-800 hover:text-blue-700">
          {button}
        </Link>
      </div>
    </div>
  );
}

Component.defaultProps = {
  link: '/ratgeber/',
};

Component.propTypes = {
  article: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  link: PropTypes.string,
  button: PropTypes.string.isRequired,
};

export default Component;
