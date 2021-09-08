import {EzCard, EzCardSection, EzLink, EzPage, EzPageHeader} from '@ezcater/recipe';
import {COMPONENTS_PATH, getAllFrontmatter} from '../../lib/mdx';
import ComponentGrid from '../../components/ComponentGrid';
import Layout from '../../components/Layout';

export default function ComponentsList({frontmatters}: any) {
  return (
    <Layout>
      <EzPageHeader title="Components" />
      <EzPage>
        <EzCard>
          <EzCardSection>
            <p>
              Our components are a collection of reusable interface elements and are designed to
              facilitate the creation of consistent experiences across our applications.
            </p>
            <p>
              Each component in this collection includes documentation to help guide your
              implementation, including explanations of the intended usage of the component, live
              examples that you can modify and experiment with, and best practices for applying the
              component correctly in your application.
            </p>
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
  const frontmatters = getAllFrontmatter(COMPONENTS_PATH);
  return {props: {frontmatters}};
}
