import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Seo from '../components/Seo';
import ArticleItem from '../components/ArticleItem';

function Page({ data }) {
  const calculators = data.allMarkdownRemark.nodes.map((node) => node.frontmatter);
  const page = data.pagesYaml;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header title={page.header.title} text={page.header.text} />
      <section>
        <div className="bg-white pt-16 pb-16 lg:pt-24 lg:pb-24">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
              {calculators.map((calculator) => (
                <ArticleItem
                  link={`/rechner/${calculator.slug}/`}
                  key={calculator.slug}
                  article={calculator}
                  button={page.calculators.button}
                />
              ))}
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
    allMarkdownRemark(filter: { frontmatter: { collection: { eq: "calculator" } } }) {
      nodes {
        frontmatter {
          slug
          title
          description
        }
      }
    }
    pagesYaml(slug: { eq: "calculators" }) {
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
        text
        title
      }
      calculators {
        button
      }
    }
  }
`;
