import React from 'react';
import {getMDXComponent} from 'mdx-bundler/client';
import {EzCard, EzPage, EzPageHeader} from '@ezcater/recipe';
import {components, scope} from '../../components/MDXComponents';
import {GUIDES_PATH, getAllFrontmatter, getMdx} from '../../lib/mdx';
import Layout from '../../components/Layout';

type Doc = {
  frontmatter: any;
  code: any;
};

export default function Doc({frontmatter, code}: Doc) {
  const Component = React.useMemo(() => getMDXComponent(code, scope), [code]);

  return (
    <Layout>
      <EzPageHeader title={frontmatter.title} />
      <EzPage>
        <EzCard>
          <Component components={components} />
        </EzCard>
      </EzPage>
    </Layout>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter(GUIDES_PATH);

  return {
    paths: frontmatters.map(({slug}) => ({params: {slug}})),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const {frontmatter, code} = await getMdx(GUIDES_PATH, context.params.slug);

  return {
    props: {
      frontmatter,
      code,
    },
  };
}
