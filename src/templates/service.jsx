import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PrimaryButtonB from '../components/PrimaryButtonB';
import PrimaryButtonA from '../components/PrimaryButtonA';
import ContactTeaser from '../components/ContactTeaser';
import Seo from '../components/Seo';

function Page({ data }) {
  const service = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };

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
    title: service.title,
    description: service.description,
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <Helmet>
        <script
          defer
          type="text/javascript"
          src="https://www.baufi-lead.de/baufilead/partner/dvvEderFNPvzhryAcDJwqVsqxpCjmC/imports.js"
        />
      </Helmet>
      <div className="pb-16 pt-32 bg-gray-50 overflow-hidden" style={{ minHeight: '75vh' }}>
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <p className="text-base text-blue-800 font-semibold tracking-wide uppercase">
              {service.category}
            </p>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {service.title}
            </h1>
          </div>
          <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p className="text-lg text-gray-500">{service.description}</p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div
                className="prose prose-blue text-gray-500 mx-auto lg:max-w-none"
                // eslint-disable-next-line
                dangerouslySetInnerHTML={{ __html: service.html }}
              />
              <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none space-x-4">
                {service.calcButton && (
                  <PrimaryButtonB
                    styleClass="ring-offset-gray-100"
                    extraClass={service.calcButton.calculator}
                  >
                    {service.calcButton.text}
                  </PrimaryButtonB>
                )}
                {service.linkButton && (
                  <PrimaryButtonA
                    styleClass="ring-offset-gray-100"
                    href={service.linkButton.link}
                    target="_blank"
                  >
                    {service.linkButton.text}
                  </PrimaryButtonA>
                )}
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
              </svg>
              <ContactTeaser />
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
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        category
        calcButton {
          text
          calculator
        }
        linkButton {
          text
          link
        }
        calculator
      }
      html
    }
  }
`;
