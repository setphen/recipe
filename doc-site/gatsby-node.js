const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    category
                    path
                    title
                  }
                  tableOfContents
                  code {
                    scope
                    body
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({node}) => {
          createPage({
            path: node.frontmatter.path,
            component: componentWithMDXScope(
              path.resolve('./src/components/Pages.js'),
              node.code.scope,
              __dirname
            ),
            context: node,
          });
        });
      })
    );
  });
};
