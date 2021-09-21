import React from 'react';
import {getMDXComponent} from 'mdx-bundler/client';
import {EzCard, EzPage, EzPageHeader} from '@ezcater/recipe';
import {components, scope} from '../../components/MDXComponents';
import {ROOT_PATH, getMdx} from '../../lib/mdx';
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

export async function getStaticProps() {
  const {frontmatter, code} = await getMdx(ROOT_PATH, 'CHANGELOG');

  return {
    props: {
      frontmatter,
      code,
    },
  };
}
