const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create the animal pages
  const result = await graphql(`
    query {
      articles: allMarkdownRemark(filter: { frontmatter: { collection: { eq: "article" } } }) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
      calculators: allMarkdownRemark(
        filter: { frontmatter: { collection: { eq: "calculator" } } }
      ) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
      services: allMarkdownRemark(filter: { frontmatter: { collection: { eq: "service" } } }) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);
  result.data.articles.nodes.forEach((node) => {
    createPage({
      path: `ratgeber/${node.frontmatter.slug}/`,
      component: path.resolve(`./src/templates/article.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });
  result.data.calculators.nodes.forEach((node) => {
    createPage({
      path: `rechner/${node.frontmatter.slug}/`,
      component: path.resolve(`./src/templates/calculator.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });
  result.data.services.nodes.forEach((node) => {
    createPage({
      path: `angebot/${node.frontmatter.slug}/`,
      component: path.resolve(`./src/templates/service.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });
};

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`

    # make the image of the meta block optional

    type PagesYamlMeta @infer {
      title: String
      description: String
      image: File @fileByRelativePath
    }

    type MarkdownRemarkFrontmatterMeta @infer {
      title: String
      description: String
      image: File @fileByRelativePath
    }

  `);
};
