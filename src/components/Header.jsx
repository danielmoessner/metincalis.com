import React from 'react';
import PropTypes from 'prop-types';

function Header({ title, text }) {
  return (
    <header className="bg-gray-050 pt-16">
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl">{text}</p>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Header;
