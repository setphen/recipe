import React, {Component} from 'react';
import {MDXProvider} from '@mdx-js/tag';
import MDXRenderer from './MdxRenderer';
import Layout from './Layout';

export default class MDXRuntimeTest extends Component {
  render() {
    const mdx = this.props.pageContext;

    return (
      <Layout>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXProvider>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </MDXProvider>
      </Layout>
    );
  }
}
