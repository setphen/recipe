import React from 'react';
import * as Recipe from '@ezcater/recipe';
import {ComponentMap} from 'mdx-bundler/client';
import NextLink from './NextLink';
import ezcaterLogo from '../public/images/ezcater-logo.svg';

const {EzHeading, EzLink} = Recipe;

export const components: ComponentMap = {
  ...(Recipe as any),
  h1: (props: any) => <EzHeading {...props} />,
  h2: ({children, id, ...props}: any) => (
    <EzHeading {...props} as="h2" size="3" id={id}>
      {children}
    </EzHeading>
  ),
  h3: ({children, id, ...props}: any) => (
    <EzHeading {...props} as="h3" size="3" id={id}>
      {children}
    </EzHeading>
  ),
  h4: ({children, id, ...props}: any) => (
    <EzHeading {...props} as="h4" size="5" id={id}>
      {children}
    </EzHeading>
  ),
  a: ({href = '', ...props}: any) => {
    if (href.startsWith('http'))
      return <EzLink {...props} href={href} target="_blank" rel="noopener" />;

    return (
      <EzLink>
        <NextLink to={href}>{props.children}</NextLink>
      </EzLink>
    );
  },
};

export const scope = {
  withPrefix(url: string) {
    return url;
  },
  ezCaterLogoPath: ezcaterLogo.src,
};
