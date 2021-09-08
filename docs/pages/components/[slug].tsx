import React from 'react';
import {getMDXComponent} from 'mdx-bundler/client';
import {EzCard, EzPage, EzPageHeader} from '@ezcater/recipe';
import {components, scope} from '../../components/MDXComponents';
import {COMPONENTS_PATH, getAllFrontmatter, getMdx} from '../../lib/mdx';
import Layout from '../../components/Layout';
import NextLink from '../../components/NextLink';

type Doc = {
  frontmatter: any;
  code: any;
};

const toPascalCase = (str: string) =>
  str
    .match(/[a-z]+/gi)
    ?.map(word => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    })
    .join('') as string;

export default function Doc({frontmatter, code}: Doc) {
  const Component = React.useMemo(() => getMDXComponent(code, scope), [code]);

  return (
    <Layout>
      <EzPageHeader
        title={frontmatter.title}
        breadcrumb={{to: '/components', as: NextLink, label: 'Back to Components'}}
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
  const frontmatters = getAllFrontmatter(COMPONENTS_PATH);

  return {
    paths: frontmatters
      // check that we have *something* in frontmatter
      .filter(({name}) => Boolean(name))
      .map(({slug}) => ({params: {slug}})),
    fallback: false,
  };
}

const slots = ['EzFooter', 'EzHeader', 'EzItem', 'EzPreview'];

export async function getStaticProps(context: any) {
  const name = toPascalCase(context.params.slug);
  const dir = slots.includes(name) ? 'EzContent' : name;
  const file = `${dir}/${name}`;

  const {frontmatter, code} = await getMdx(COMPONENTS_PATH, file);

  return {
    props: {
      frontmatter,
      code,
    },
  };
}
