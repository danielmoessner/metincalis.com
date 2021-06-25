import React, { useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import ArticleItem from '../components/ArticleItem';
import Seo from '../components/Seo';

function Patterns() {
  return (
    <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
      <div className="relative h-full">
        <svg
          className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
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
          className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
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
  // const homePage = data.pagesYaml;
  const page = data.pagesYaml;
  const articles = data.allMarkdownRemark.nodes.map((node) => node.frontmatter);

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

  return (
    <Layout>
      <Seo meta={page.meta} />
      <header className="bg-gray-050">
        <div className="relative overflow-hidden pt-16">
          <Patterns />
          <div className="pb-16 sm:pb-24 relative">
            <div className="pt-16 mx-auto max-w-7xl px-4 sm:pt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">{page.header.title}</span>
                  <span className="block text-yellow-600">{page.header.titleColor}</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="bg-white pt-6 pb-8 px-8 relative rounded-lg shadow-lg">
                <h2 className="text-3xl tracking-tight font-bold text-gray-900">
                  {page.form.title}
                </h2>
                <form className="flex flex-col space-y-6 mt-8 lg:flex-row lg:flex-nowrap lg:space-x-4 lg:space-y-0">
                  <div className="lg:w-1/5">
                    <label htmlFor="grund" className="block text-sm font-medium text-gray-700">
                      {page.form.label1}
                      <select
                        id="grund"
                        defaultValue="KAUF"
                        className="baufilead_finanzierungszweck text-gray-700 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
                      >
                        <option value="KAUF">Immobilienkauf</option>
                        <option value="BAU">Bauvorhaben</option>
                        <option value="MODERNISIERUNG">Modernisierung</option>
                        <option value="UMSCHULDUNG">Umschuldung</option>
                      </select>
                    </label>
                  </div>
                  <div className="lg:w-1/5">
                    <label htmlFor="summe" className="block text-sm font-medium text-gray-700">
                      {page.form.label2}
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="number"
                          id="summe"
                          step="10000"
                          className="baufilead_darlehenssumme placeholder-gray-300 text-gray-700 focus:ring-yellow-500 focus:border-yellow-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder="200000"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">€</span>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="lg:w-1/5">
                    <label htmlFor="kosten" className="block text-sm font-medium text-gray-700">
                      {page.form.label3}
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="number"
                          id="kosten"
                          step="10000"
                          className="baufilead_anschaffungskosten text-gray-700 placeholder-gray-300 focus:ring-yellow-500 focus:border-yellow-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder="100000"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">€</span>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="lg:w-1/5">
                    <label htmlFor="ort" className="block text-sm font-medium text-gray-700">
                      {page.form.label4}
                      <div className="mt-1">
                        <input
                          type="number"
                          id="ort"
                          className="baufilead_postleitzahl shadow-sm placeholder-gray-300 focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="90933"
                        />
                      </div>
                    </label>
                  </div>
                  <button
                    type="submit"
                    onClick={(event) => event.preventDefault()}
                    className="baufilead_konditionsrechner w-1/5 self-end ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  >
                    {page.form.button}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:px-8" />
        </div>
      </header>
      <section>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
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
                    className="flex-shrink-0 h-6 w-6 text-blue-700"
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
                    <dt className="text-lg leading-6 font-medium text-gray-900">{offer.title}</dt>
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
        <div className="bg-gray-50 pt-16 sm:pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {page.plan.title}
              </h2>
              <p className="mt-3 text-lg text-gray-500 sm:mt-4">{page.plan.text}</p>
            </div>
          </div>
          <div className="mt-10 pb-16 sm:pb-28">
            <div className="relative">
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <section>
        <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                {page.articles.title}
              </h2>
              <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                <p className="text-xl text-gray-500">{page.articles.text}</p>
              </div>
            </div>
            <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
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
      </section>
      <section>
        <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              <span className="block">{page.cta.textTop}</span>
              <span className="block text-yellow-600">{page.cta.textBottom}</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow" />
              <div className="ml-3 inline-flex rounded-md shadow">
                <button
                  type="button"
                  className="baufilead_konditionsrechner inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 ring-offset-gray-800 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
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
        image {
          childImageSharp {
            resize(width: 1200) {
              src
            }
          }
        }
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
