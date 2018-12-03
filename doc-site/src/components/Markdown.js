import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Layout from './Layout';

const Content = ({content, className}) => <div className={className}>{content}</div>;

export default ({pageContext: {mdx}}) => {
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Layout>
  );
};
