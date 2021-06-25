import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
// import PropTypes from 'prop-types';
// import { Transition } from '@headlessui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import SecondaryButton from './SecondaryButtonA';

function Component() {
  const data = useStaticQuery(graphql`
    {
      teaser: settingsYaml(slug: { eq: "teaser" }) {
        buttonText
        buttonLink
        text
      }
      global: settingsYaml(slug: { eq: "global" }) {
        logo {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 500)
          }
        }
      }
    }
  `);
  const { teaser, global } = data;

  return (
    <div className="relative bg-white rounded-lg shadow-lg">
      <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-8 sm:pb-5">
        <GatsbyImage
          className="w-32 h-auto sm:w-48"
          image={global.logo.childImageSharp.gatsbyImageData}
          alt="Logo"
        />
        <div className="relative text-lg text-gray-700 font-medium mt-8">
          <p className="relative">{teaser.text}</p>
          <div className="mt-5 text-base">
            <SecondaryButton href={teaser.buttonLink}>{teaser.buttonText}</SecondaryButton>
          </div>
        </div>
      </div>
      <div className="relative flex items-center bg-blue-800 rounded-b-lg not-italic py-5 px-6 sm:items-start sm:py-5 sm:pl-12 sm:pr-10 sm:mt-4" />
    </div>
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export default Component;
