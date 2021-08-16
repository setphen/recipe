import {EzCard, EzCardSection, EzLink, EzPage, EzPageHeader} from '@ezcater/recipe';
import {COOKBOOK_PATH, getAllFrontmatter} from '../../lib/mdx';
import ComponentGrid from '../../components/ComponentGrid';
import Layout from '../../components/Layout';

export default function ComponentsList({frontmatters}: any) {
  return (
    <Layout>
      <EzPageHeader title="Cookbook" />
      <EzPage>
        <EzCard>
          <EzCardSection>
            <p>
              The Recipe Cookbook is a collection of examples to show how combinations of Recipe
              components can be composed like lego-blocks to build complete pages.
            </p>
            <p>
              The cookbook is be comprised of examples of pages that are based on the of real design
              mockups our designers have created for screens our squads are building.
            </p>
            <p>The purpose of the cookbook is two-fold:</p>
            <ul>
              <li>
                provide a reference guide of the common patterns of component usage needed to build
                pages
              </li>
              <li>guide our road-map by tackling emerging designs</li>
            </ul>
          </EzCardSection>
          <ComponentGrid frontmatters={frontmatters} />
          <EzCardSection title="Feedback">
            <p>
              While we try to ensure our components are flexible enough to meet our diverse needs,
              our components are designed to also be restrictive enough in order to ensure a
              consistent experience across our applications.
            </p>
            <p>
              Please reach out to us using our{' '}
              <EzLink>
                <a href="https://slack.com/app_redirect?channel=pb-design-system">slack channel</a>
              </EzLink>{' '}
              for usage questions.
            </p>
            <p>
              Issues and feature requests can be created on our{' '}
              <EzLink>
                <a href="https://github.com/ezcater/recipe/issues">GitHub page</a>
              </EzLink>
              .
            </p>
          </EzCardSection>
        </EzCard>
      </EzPage>
    </Layout>
  );
}

export function getStaticProps() {
  const frontmatters = getAllFrontmatter(COOKBOOK_PATH);
  return {props: {frontmatters}};
}
