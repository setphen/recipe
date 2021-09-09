import Head from 'next/head';
import {EzAppLayout, EzNavigation, EzProvider} from '@ezcater/recipe';
import {theme as marketplaceTheme} from '@recipe-ui/theme-marketplace';
import {docsRoutes} from '../lib/docsRoutes';
import recipeLogo from '../public/images/recipe-logo.svg';
import NextLink from './NextLink';
import Sprites from './Sprites';
import {useMarketplaceTheme, useToggleMarketplaceTheme} from '../pages/_app';

export default function Layout({children}: any) {
  const isMarketplaceThemeSelected = useMarketplaceTheme();
  const toggleMarketplaceTheme = useToggleMarketplaceTheme();

  return (
    <EzProvider theme={isMarketplaceThemeSelected ? marketplaceTheme : undefined}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i"
          rel="stylesheet"
        />
      </Head>
      <Sprites />
      <EzAppLayout layout="full">
        <EzNavigation
          home={{
            to: '/',
            as: NextLink,
            label: 'Recipe',
            logo: {src: recipeLogo.src, width: 120},
          }}
          links={docsRoutes.map((route: any) => ({
            label: route.title,
            links: route.pages?.map(({title, path}: any) => ({label: title, href: path})),
            ...(route.external ? {href: route.path} : {as: NextLink, to: route.path}),
          }))}
          utilityLinks={[
            {
              label: `Use ${isMarketplaceThemeSelected ? 'fulfillment' : 'marketplace'} theme`,
              onClick: toggleMarketplaceTheme,
            },
          ]}
        >
          {children}
        </EzNavigation>
      </EzAppLayout>
    </EzProvider>
  );
}
