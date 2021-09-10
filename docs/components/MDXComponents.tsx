import React from 'react';
import * as Recipe from '@ezcater/recipe';
import {ComponentMap} from 'mdx-bundler/client';
import {Link, NavLink, BrowserRouter, StaticRouter, Route} from 'react-router-dom';
import NextLink from './NextLink';
import styles from '../styles/Component.module.css';
import SyntaxHighlighting from './SyntaxHighlighting';
import CodeDemo from './CodeDemo';
import Placeholder from './Placeholder';
import ezcaterLogo from '../public/images/ezcater-logo.svg';
import {prefix} from '../utils/prefix';

const {EzHeading, EzLink} = Recipe;

const LinkHeading = ({children, id, as, size, props, style}: any) => (
  <EzHeading {...props} as={as} size={size} id={id} className={styles.heading} style={style}>
    <EzLink use="reset">
      <NextLink to={`#${id}`} aria-label={`${children} permalink`}>
        <svg
          aria-hidden="true"
          focusable="false"
          height="16"
          version="1.1"
          viewBox="0 0 16 16"
          width="16"
          className={styles.icon}
        >
          <path
            fillRule="evenodd"
            d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
          />
        </svg>
        {children}
      </NextLink>
    </EzLink>
  </EzHeading>
);

const headingStyle = {
  marginTop: 24,
  marginBottom: 16,
  paddingBottom: 7,
};

const reactRouter = {
  Link,
  NavLink,
  Router:
    typeof window === 'undefined'
      ? ({children}: any) =>
          React.createElement(StaticRouter, {context: {}, location: '/'}, children)
      : BrowserRouter,
  Route,
};

export const components: ComponentMap = {
  ...(Recipe as any),
  h1: (props: any) => <EzHeading {...props} />,
  h2: ({children, id, ...props}: any) => (
    <LinkHeading {...props} as="h2" size="3" id={id} style={headingStyle}>
      {children}
    </LinkHeading>
  ),
  h3: ({children, id, ...props}: any) => (
    <LinkHeading {...props} as="h3" size="3" id={id} style={headingStyle}>
      {children}
    </LinkHeading>
  ),
  h4: ({children, id, ...props}: any) => (
    <LinkHeading {...props} as="h4" size="5" id={id} style={headingStyle}>
      {children}
    </LinkHeading>
  ),
  hr: () => (
    <hr style={{border: '1px solid #ced4d9', borderBottom: 'none', margin: '24px -20px'}} />
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
  pre: ({children}: any) => <>{children}</>,
  code: (props: any) => {
    const {className} = props;
    const language = className?.replace('language-', '') || 'jsx';

    // inline code snippet
    if (!className) return <code {...props} />;

    // highlighted example code
    return <SyntaxHighlighting code={props.children} language={language} />;
  },
  CodeDemo,
  Preview: ({children}: any) => <>{children()}</>,
  Placeholder,
  React,
  table: ({children}: any) => <table className={styles.table}>{children}</table>,
  img: (props: any) => {
    // rewrite url when deployed to a prefixed path (such as /recipe under GH Pages)
    const src = props.src?.includes('data:image') ? props.src : `${prefix}${props.src}`;
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} src={src} className={styles.img} />;
  },
  ...reactRouter,
};

export const scope = {
  withPrefix(url: string) {
    return `${prefix}${url}`;
  },
  ezCaterLogoPath: `${prefix}${ezcaterLogo.src}`,
  ...reactRouter,
};
