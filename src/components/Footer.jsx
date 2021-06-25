import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import lineBreaks from '../utils/lineBreaks';

function Footer() {
  const data = useStaticQuery(graphql`
    {
      contact: settingsYaml(slug: { eq: "contact" }) {
        address
        phone
        email
      }
      footer: settingsYaml(slug: { eq: "footer" }) {
        column1
        column2
        column3
        column4
        copyright
      }
      services: allMarkdownRemark(
        filter: { frontmatter: { collection: { eq: "service" } } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            title
            slug
            icon
            description
          }
        }
      }
    }
  `);
  const { contact, footer } = data;
  const services = data.services.nodes.map((node) => node.frontmatter);

  return (
    <footer className="bg-gray-800 relative">
      <h2 className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto pb-8 px-4 sm:px-6 lg:px-8">
        <div className="border-t-2 border-gray-600 pb-10 pt-12 lg:pt-16">
          <div className=" xl:grid xl:grid-cols-4 xl:gap-8">
            <div className="grid sm:grid-cols-2 gap-8 xl:col-span-3">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    {footer.column1}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to={`/angebot/${service.slug}/`}
                          className="text-base text-gray-300 hover:text-white"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    {footer.column2}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link to="/" className="text-base text-gray-300 hover:text-white">
                        Startseite
                      </Link>
                    </li>

                    <li>
                      <Link to="/ueber-uns/" className="text-base text-gray-300 hover:text-white">
                        Über uns
                      </Link>
                    </li>

                    <li>
                      <Link to="/ratgeber/" className="text-base text-gray-300 hover:text-white">
                        Rategeber
                      </Link>
                    </li>

                    <li>
                      <Link to="/rechner/" className="text-base text-gray-300 hover:text-white">
                        Rechner
                      </Link>
                    </li>

                    <li>
                      <Link to="/kontakt/" className="text-base text-gray-300 hover:text-white">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    {footer.column3}
                  </h3>
                  <ul className="mt-4 space-y-4 text-gray-300">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 flex-shrink-0 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {contact.phone}
                      </a>
                    </li>

                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 flex-shrink-0 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {contact.email}
                      </a>
                    </li>

                    <li className="flex">
                      <svg
                        className="w-5 h-5 flex-shrink-0 mr-2 mt-1"
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
                      <address>
                        <p
                          // eslint-disable-next-line
                          dangerouslySetInnerHTML={{ __html: lineBreaks(contact.address) }}
                        />
                      </address>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    {footer.column4}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link to="/impressum/" className="text-base text-gray-300 hover:text-white">
                        Impressum
                      </Link>
                    </li>
                    <li>
                      <Link to="/datenschutz/" className="text-base text-gray-300 hover:text-white">
                        Datenschutz
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            <span>&copy; </span>
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
