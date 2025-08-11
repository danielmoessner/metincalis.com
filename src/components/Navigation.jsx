import React, { Fragment } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Transition, Popover } from '@headlessui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Navigation() {
  const data = useStaticQuery(graphql`
    {
      settingsYaml(slug: { eq: "global" }) {
        logo {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 320, placeholder: NONE)
          }
        }
      }
      calculators: allMarkdownRemark(
        filter: { frontmatter: { collection: { eq: "calculator" } } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            title
            slug
          }
        }
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
  const calculators = data.calculators.nodes.map((node) => node.frontmatter);
  const services = data.services.nodes.map((node) => node.frontmatter);

  return (
    <Popover as="nav">
      {({ open }) => (
        <>
          <div className="absolute top-0 left-0 right-0 z-50 w-full px-4 pt-6 mx-auto max-w-7xl sm:px-6">
            <div className="relative flex items-center justify-between sm:h-10 lg:justify-center">
              <div className="flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0">
                <div className="flex items-center justify-between w-full lg:w-auto">
                  <Link className="block" to="/">
                    <GatsbyImage
                      className="w-auto h-8 sm:h-auto sm:w-40"
                      objectFit="contain"
                      objectPosition="0% 50%"
                      image={data.settingsYaml.logo.childImageSharp.gatsbyImageData}
                      alt="Logo"
                    />
                  </Link>
                  <div className="flex items-center -mr-2 lg:hidden">
                    <Popover.Button
                      className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-gray-50 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Menü öffnen</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <Popover.Group className="hidden lg:flex lg:space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        type="button"
                        className={`group rounded-md inline-flex items-center text-base font-medium ring-offset-gray-050 hover:text-gray-900 focus:outline-none ${
                          open ? 'text-gray-900' : 'text-gray-500'
                        }`}
                        aria-expanded="false"
                      >
                        <span>Angebot</span>
                        <ChevronDownIcon
                          className={`ml-2 h-5 w-5 group-hover:text-gray-500 ${
                            open ? 'text-gray-600' : 'text-gray-400'
                          }`}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        from="opacity-100 translate-y-0"
                        to="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          static
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                              {services.map((service) => (
                                <Link
                                  key={service.slug}
                                  to={`/angebot/${service.slug}/`}
                                  className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                                >
                                  <div
                                    className="flex-shrink-0 w-6 h-6 text-blue-600"
                                    // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{ __html: service.icon }}
                                  />

                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {service.title}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {service.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Link to="/angebot/ratenkredit/" className="font-medium text-gray-500 hover:text-gray-900">
                  Ratenkredit
                </Link>
                <Link to="/ueber-uns/" className="font-medium text-gray-500 hover:text-gray-900">
                  Über uns
                </Link>
                <Link to="/ratgeber/" className="font-medium text-gray-500 hover:text-gray-900">
                  Ratgeber
                </Link>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        type="button"
                        className={`group rounded-md inline-flex items-center text-base font-medium ring-offset-gray-050 hover:text-gray-900 focus:outline-none ${
                          open ? 'text-gray-900' : 'text-gray-500'
                        }`}
                        aria-expanded="false"
                      >
                        <span>Rechner</span>
                        <ChevronDownIcon
                          className={`ml-2 h-5 w-5 group-hover:text-gray-500 ${
                            open ? 'text-gray-600' : 'text-gray-400'
                          }`}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        show={open}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        from="opacity-100 translate-y-0"
                        to="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          static
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                              {calculators.map((calculator) => (
                                <Link
                                  key={calculator.slug}
                                  to={`/rechner/${calculator.slug}/`}
                                  className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                                >
                                  <div className="">
                                    <p className="text-base font-medium text-gray-900">
                                      {calculator.title}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                
                <Link to="/kontakt/" className="font-medium text-gray-500 hover:text-gray-900">
                  Kontakt
                </Link>
              </Popover.Group>
            </div>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              className="absolute inset-x-0 top-0 z-50 p-2 transition-all origin-top-right transform lg:hidden"
              static
              focus
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <GatsbyImage
                      className="w-20 h-auto"
                      image={data.settingsYaml.logo.childImageSharp.gatsbyImageData}
                      alt="Logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Menü schließen</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link
                    to="/"
                    className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    Startseite
                  </Link>
                  {services.map((service) => (
                    <Link
                      to={`/angebot/${service.slug}/`}
                      key={service.slug}
                      className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    to="/ueber-uns/"
                    className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    Über uns
                  </Link>
                  <Link
                    to="/ratgeber/"
                    className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    Ratgeber
                  </Link>
                  <Link
                    to="/rechner/"
                    className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    Rechner
                  </Link>
                  <Link
                    to="/kontakt/"
                    className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default Navigation;
