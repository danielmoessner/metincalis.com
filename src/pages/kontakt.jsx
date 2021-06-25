import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Seo from '../components/Seo';
import lineBreaks from '../utils/lineBreaks';

function Pattern() {
  return (
    <svg
      className="absolute top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
      width="404"
      height="384"
      fill="none"
      viewBox="0 0 404 384"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
    </svg>
  );
}

function Page({ data }) {
  const page = data.pagesYaml;
  const contact = data.settingsYaml;

  return (
    <Layout overflowHidden>
      <Seo meta={page.meta} />
      <Header title={page.header.title} text={page.header.text} />
      <section className="relative bg-gray-100">
        <div className="absolute w-full overflow-hidden h-1/2 bg-gray-050" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Pattern />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 rounded overflow-hidden">
              <div className="relative overflow-hidden py-10 px-6 bg-yellow-700 sm:px-10 xl:p-12">
                <div
                  className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width="160"
                    height="678"
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-lg font-medium text-white">{page.contact.title}</h2>
                <p className="mt-6 text-base text-white max-w-3xl">{page.contact.text}</p>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">Telefon</span>
                  </dt>
                  <dd className="flex text-base text-white">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-yellow-900"
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="ml-3">{contact.phone}</span>
                  </dd>
                  <dt>
                    <span className="sr-only">E-Mail</span>
                  </dt>
                  <dd className="flex text-base text-white">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-yellow-900"
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="ml-3">{contact.email}</span>
                  </dd>
                  <dt>
                    <span className="sr-only">Adresse</span>
                  </dt>
                  <dd className="flex text-base text-white">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-yellow-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <address className="ml-3">
                      <p
                        // eslint-disable-next-line
                        dangerouslySetInnerHTML={{ __html: lineBreaks(contact.address) }}
                      />
                    </address>
                  </dd>
                </dl>
              </div>

              <div className="lg:col-span-2 bg-white">
                <iframe
                  title="Ort"
                  src={page.contact.maps}
                  style={{ border: '0', width: '100%', height: '100%', minHeight: '450px' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="py-24 sm:py-20" />
      </section>
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
    pagesYaml(slug: { eq: "contact" }) {
      meta {
        title
        description
      }
      header {
        text
        title
      }
      contact {
        title
        maps
        text
      }
    }
    settingsYaml(slug: { eq: "contact" }) {
      email
      phone
      address
    }
  }
`;
