import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';

export default function Index({data, location}) {
  const {edges: pages} = data.allMdx || {edges: []};
  if (!pages.length) return <div>No Components Found</div>;
  return (
    <Layout location={location}>
      {pages.map(({node: component}) => {
        return (
          <div key={component.id}>
            <h2>
              <Link to={component.frontmatter.path}>{component.frontmatter.title}</Link>
            </h2>
          </div>
        );
      })}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: {fields: [frontmatter___path], order: ASC}) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
