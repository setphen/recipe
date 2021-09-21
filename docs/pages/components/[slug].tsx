import React from 'react';
import {EzCard, EzPage, EzPageHeader, EzPageSection, EzLink, EzTextStyle} from '@ezcater/recipe';
import {components, scope} from '../../components/MDXComponents';
import {COMPONENTS_PATH, getAllFrontmatter, getMdx} from '../../lib/mdx';
import {getMDXComponent} from '../../lib/getMDXComponent';
import Layout from '../../components/Layout';
import NextLink from '../../components/NextLink';
import {QuickNav} from '../../components/QuickNav';
import quickNavStyles from '../../styles/QuickNav.module.css';

type Doc = {
  frontmatter: any;
  code: any;
  toc: any;
  filePath: any;
};

const toPascalCase = (str: string) =>
  str
    .match(/[a-z]+/gi)
    ?.map(word => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    })
    .join('') as string;

export default function Doc({frontmatter, code, toc, filePath}: Doc) {
  const Component = React.useMemo(() => getMDXComponent(code, scope), [code]);

  return (
    <Layout>
      <EzPageHeader
        title={frontmatter.title}
        breadcrumb={{to: '/components', as: NextLink, label: 'Back to Components'}}
      />
      <EzPage>
        <EzPageSection use="main">
          <EzCard>
            <Component components={components} />
            <EzTextStyle use="subdued" align="right">
              <EzLink use="secondary">
                <a
                  href={`https://github.com/ezcater/recipe/edit/main/${filePath}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Edit this page on GitHub.</span>
                </a>
              </EzLink>
            </EzTextStyle>
          </EzCard>
        </EzPageSection>
        <EzPageSection use="aside" {...({className: quickNavStyles.sticky} as any)}>
          <QuickNav toc={toc} />
        </EzPageSection>
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

  const {frontmatter, code, toc} = await getMdx(COMPONENTS_PATH, file);

  return {
    props: {
      frontmatter,
      code,
      toc,
      filePath: `src/components/${file}.md`,
    },
  };
}
