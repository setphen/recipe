import Head from 'next/head';
import {EzAppLayout, EzNavigation} from '@ezcater/recipe';
import {docsRoutes} from '../lib/docsRoutes';
import recipeLogo from '../public/images/recipe-logo.svg';
import NextLink from './NextLink';
import Sprites from './Sprites';

export default function Layout({children}: any) {
  return (
    <>
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
        >
          {children}
        </EzNavigation>
      </EzAppLayout>
    </>
  );
}
