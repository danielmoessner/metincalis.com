import React, { useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import ArticleItem from '../components/ArticleItem';
import Seo from '../components/Seo';

function Patterns() {
  return (
    <div className="absolute inset-y-0 w-full h-full" aria-hidden="true">
      <div className="relative h-full">
        <svg
          className="absolute transform right-full translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
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
          <rect width="404" height="784" fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
        </svg>
        <svg
          className="absolute transform left-full -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="d2a68204-c383-44b1-b99f-42ccff4e5365"
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
          <rect width="404" height="784" fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
        </svg>
      </div>
    </div>
  );
}

function Page({ data }) {
  const page = data.pagesYaml;
  const articles = data.allMarkdownRemark.nodes.map((node) => node.frontmatter);

  return (
    <Layout>
      <Seo meta={page.meta} />
      <header className="bg-gray-50">
        <div className="relative pt-16 overflow-hidden">
          <Patterns />
          <div className="relative pb-16 sm:pb-24">
            <div className="px-4 pt-16 mx-auto max-w-7xl sm:pt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">{page.header.title}</span>
                  <span className="block text-blue-600">{page.header.titleColor}</span>
                </h1>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  {page.header.text}
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1" />
              <div className="flex-1 w-full bg-gray-800" />
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
              <div className="relative px-8 pt-6 pb-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Immobilienfinanzierung:
                </h2>
                <form className="flex flex-col mt-8 space-y-6 lg:flex-row lg:flex-nowrap lg:space-x-4 lg:space-y-0" method="get" action="/rechner/immobilienkauf/">
                  <div className="lg:w-1/4">
                    <label htmlFor="grund" className="block text-sm font-medium text-gray-700">
                      Objektart
                      <select
                        id="grund"
                        defaultValue="EINFAMILIENHAUS"
                        name="objektart"
                        className="block w-full py-2 pl-3 pr-10 mt-1 text-base text-gray-700 border-gray-300 rounded-md baufilead_finanzierungszweck focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="EINFAMILIENHAUS">Einfamilienhaus</option>
                        <option value="EIGENTUMSWOHNUNG">Eigentumswohnung</option>
                        <option value="DOPPELHAUSHAELFTE">Doppelhaushälfte</option>
                        <option value="MEHRFAMILIENHAUS">Mehrfamilienhaus</option>
                      </select>
                    </label>
                  </div>
                  <div className="lg:w-1/4">
                    <label htmlFor="summe" className="block text-sm font-medium text-gray-700">
                      Kaufpreis (ohne Nebenkosten)
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="number"
                          id="summe"
                          step="10000"
                          name="kaufpreis"
                          className="block w-full pr-12 text-gray-700 placeholder-gray-300 border-gray-300 rounded-md baufilead_darlehenssumme focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="200000"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">€</span>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="lg:w-1/4">
                    <label htmlFor="ort" className="block text-sm font-medium text-gray-700">
                      Postleitzahl / Ort
                      <div className="mt-1">
                        <input
                          type="number"
                          id="ort"
                          name="plz"
                          className="block w-full placeholder-gray-300 border-gray-300 rounded-md shadow-sm baufilead_postleitzahl focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="80993"
                        />
                      </div>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex self-end justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm baufilead_konditionsrechner lg:w-1/5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Berechnen
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8" />
        </div>
      </header>

      <section>
        <div className="bg-white">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {page.offer.title}
              </h2>
              <p className="mt-4 text-lg text-gray-500">{page.offer.text}</p>
            </div>
            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
              {page.offer.offers.map((offer) => (
                <div className="flex" key={offer.link}>
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-blue-700"
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
                  <div className="ml-3">
                    <dt className="text-lg font-medium leading-6 text-gray-900">{offer.title}</dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {offer.text}
                      <div className="block mt-2">
                        <Link
                          to={offer.link}
                          className="text-base font-semibold text-blue-800 hover:text-blue-700"
                        >
                          {page.offer.button}
                        </Link>
                      </div>
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-16 bg-gray-50 sm:pt-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {page.plan.title}
              </h2>
              <p className="mt-3 text-lg text-gray-500 sm:mt-4">{page.plan.text}</p>
            </div>
          </div>
          <div className="pb-16 mt-10 sm:pb-28">
            <div className="relative">
              <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl
                    className={`rounded-lg bg-white shadow-lg divide-y-2 divide-gray-050 md:divide-y-0 md:divide-x-2 md:grid ${
                      page.plan.steps.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
                    }`}
                  >
                    {page.plan.steps.map((step) => (
                      <div key={step.title} className="flex flex-col p-6">
                        <dt className="text-3xl font-extrabold text-blue-800">{step.title}</dt>
                        <dd className="mt-2 leading-6 text-gray-600">{step.text}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="relative divide-y-2 divide-gray-200 lg:max-w-7xl">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {page.articles.title}
                </h2>
                <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                  <p className="text-xl text-gray-500">{page.articles.text}</p>
                </div>
              </div>
              <div className="grid gap-16 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                {articles.map((article) => (
                  <ArticleItem
                    key={article.slug}
                    article={article}
                    link={`/ratgeber/${article.slug}/`}
                    button={page.articles.button}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-800">
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              <span className="block">{page.cta.textTop}</span>
              <span className="block text-blue-200">{page.cta.textBottom}</span>
            </h2>
            <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow" />
              <div className="inline-flex ml-3 rounded-md shadow">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm baufilead_konditionsrechner ring-offset-gray-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {page.cta.button}
                </button>
              </div>
            </div>
          </div>
        </div>
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
    allMarkdownRemark(filter: { frontmatter: { collection: { eq: "article" } } }) {
      nodes {
        frontmatter {
          category
          slug
          title
          description
        }
      }
    }
    pagesYaml(slug: { eq: "home" }) {
      meta {
        title
        description
      }
      header {
        title
        titleColor
        text
      }
      form {
        title
        label1
        label2
        label3
        label4
        button
        subtext
      }
      offer {
        title
        text
        offers {
          title
          text
          link
        }
        button
      }
      plan {
        title
        text
        steps {
          title
          text
        }
      }
      articles {
        title
        text
        button
      }
      cta {
        textTop
        textBottom
        button
      }
    }
  }
`;
