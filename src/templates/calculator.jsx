import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PrimaryButtonB from '../components/PrimaryButtonB';

function Page({ data }) {
  const calculator = { ...data.markdownRemark.frontmatter };

  useEffect(() => {
    // eslint-disable-next-line
    const doc = document
    if (doc.getElementById('baufi-lead-script')) {
      doc.getElementById('baufi-lead-script').remove();
    }
    const script = doc.createElement('script');
    script.id = 'baufi-lead-script';
    script.src =
      'https://www.baufi-lead.de/baufilead/partner/dvvEderFNPvzhryAcDJwqVsqxpCjmC/imports.js';
    script.defer = true;
    doc.body.append(script);
  }, []);

  const meta = {
    title: calculator.title,
    description: calculator.description,
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <div className="pt-20 overflow-hidden bg-white" style={{ minHeight: '70vh' }}>
        <div className="relative px-4 pt-16 pb-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="fixed top-0 bottom-0 z-0 hidden w-screen lg:block bg-gray-50 left-3/4" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base font-semibold tracking-wide text-blue-800 uppercase">
                {calculator.category}
              </h2>
              <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                {calculator.title}
              </h1>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
              </svg>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="mx-auto text-base max-w-prose lg:max-w-none">
                <p className="mb-5 text-lg text-gray-500">{calculator.description}</p>
                <PrimaryButtonB
                  extraClass={`${calculator.calculator}`}
                  styleClass="ring-offset-white"
                >
                  <div>{calculator.title} öffnen</div>
                </PrimaryButtonB>
              </div>
              <div className="mx-auto mt-5 prose text-gray-500 prose-blue lg:max-w-none lg:row-start-1 lg:col-start-1" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        slug
        description
        category
        title
        calculator
      }
    }
  }
`;
