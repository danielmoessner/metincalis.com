import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Header from '../components/Header';
import SecondaryButton from '../components/SecondaryButton';
import Seo from '../components/Seo';

function Page({ data }) {
  const page = data.pagesYaml;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header title={page.header.title} text={page.header.text} />
      <div className="relative bg-white">
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
          <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-base font-semibold tracking-wide text-blue-700 uppercase">
                {page.about.pretitle}
              </h2>
              <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {page.about.title}
              </p>
              <dl className="mt-12 space-y-10">
                {page.about.advantages.map((advantage) => (
                  <div key={advantage.title} className="relative">
                    <dt>
                      <div className="absolute h-7 w-7 rounded-md flex items-center justify-center">
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-10 text-lg leading-6 font-medium text-gray-900">
                        {advantage.title}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-10 text-base text-gray-500">{advantage.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
            <GatsbyImage image={page.about.image.childImageSharp.gatsbyImageData} alt="Über uns" />
          </div>
        </div>
      </div>
      <div className="bg-blue-100 bg-opacity-25">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-3xl font-extrabold text-blue-900 text-center lg:text-left lg:col-span-2">
              {page.cta.title}
            </h2>
            <div className="mt-8 flex lg:mt-0 justify-end lg:items-baseline">
              <SecondaryButton classes="ring-offset-blue-100" to="/kontakt/">
                {page.cta.button}
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  {
    pagesYaml(slug: { eq: "about" }) {
      meta {
        title
        description
      }
      header {
        text
        title
      }
      about {
        advantages {
          text
          title
        }
        title
        pretitle
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      cta {
        title
        button
      }
    }
  }
`;
