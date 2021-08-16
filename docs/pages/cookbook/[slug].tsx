import React from 'react';
import {getMDXComponent} from 'mdx-bundler/client';
import {EzCard, EzPage, EzPageHeader} from '@ezcater/recipe';
import {components, scope} from '../../components/MDXComponents';
import {COOKBOOK_PATH, getAllFrontmatter, getMdx} from '../../lib/mdx';
import Layout from '../../components/Layout';
import NextLink from '../../components/NextLink';

type Doc = {
  frontmatter: any;
  code: any;
};

export default function Doc({frontmatter, code}: Doc) {
  const Component = React.useMemo(() => getMDXComponent(code, scope), [code]);

  return (
    <Layout>
      <EzPageHeader
        title={frontmatter.title}
        breadcrumb={{to: '/cookbook', as: NextLink, label: 'Back to Cookbook'}}
      />
      <EzPage>
        <EzCard>
          <Component components={components} />
        </EzCard>
      </EzPage>
    </Layout>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter(COOKBOOK_PATH);

  return {
    paths: frontmatters
      .filter(({tags}) => tags && !tags.includes('coming-soon'))
      .map(({slug}) => ({params: {slug}})),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const file = `${context.params.slug}`;

  const {frontmatter, code} = await getMdx(COOKBOOK_PATH, file);

  return {
    props: {
      frontmatter,
      code,
    },
  };
}
