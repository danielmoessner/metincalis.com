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
            gatsbyImageData(layout: CONSTRAINED, width: 320)
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 top-0 left-0 right-0 w-full absolute z-50">
            <div className="relative flex items-center justify-between sm:h-10 md:justify-center">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link className="block" to="/">
                    <GatsbyImage
                      className="w-20 h-auto sm:w-40"
                      image={data.settingsYaml.logo.childImageSharp.gatsbyImageData}
                      alt="Logo"
                    />
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button
                      className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Menü öffnen</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <Popover.Group className="hidden md:flex md:space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        type="button"
                        className={`group rounded-md inline-flex items-center text-base font-medium ring-offset-gray-050 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
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
                          className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          static
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {services.map((service) => (
                                <Link
                                  key={service.slug}
                                  to={`/angebot/${service.slug}/`}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <div
                                    className="flex-shrink-0 text-yellow-600 w-6 h-6"
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
                        className={`group rounded-md inline-flex items-center text-base font-medium ring-offset-gray-050 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
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
                          className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          static
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {calculators.map((calculator) => (
                                <Link
                                  key={calculator.slug}
                                  to={`/rechner/${calculator.slug}/`}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
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
              className="z-50 absolute top-0 inset-x-0 p-2 transition-all transform origin-top-right md:hidden"
              static
              focus
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <GatsbyImage
                      className="w-20 h-auto"
                      image={data.settingsYaml.logo.childImageSharp.gatsbyImageData}
                      alt="Logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                      <span className="sr-only">Menü schließen</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link
                    to="/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Startseite
                  </Link>
                  {services.map((service) => (
                    <Link
                      to={`/angebot/${service.slug}/`}
                      key={service.slug}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    to="/ueber-uns/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Über uns
                  </Link>
                  <Link
                    to="/ratgeber/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Ratgeber
                  </Link>
                  <Link
                    to="/rechner/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Rechner
                  </Link>
                  <Link
                    to="/kontakt/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
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
