import React from 'react';
import Link from 'gatsby-link';
import {withPrefix} from 'gatsby';
import Helmet from 'react-helmet';
import packageJson from '../../../package.json';
import {EzLayout, EzAppLayout} from '@ezcater/recipe';
import ezcaterLogo from '../ezcater-logo.svg';
import {Global, css} from '@emotion/core';
import styled from '@emotion/styled';

import {bg} from '../css/background';
import {border, rounded} from '../css/border';
import {hidden, block, inlineFlex, flex} from '../css/display';
import {shadow} from '../css/effects';
import {items, justify, shrink} from '../css/flexbox';
import {object, overflow} from '../css/layout';
import {absolute, relative, inset, right} from '../css/position';
import {hover} from '../css/pseudo';
import {sm, md, lg, xl} from '../css/responsive';
import {h, w, min, max} from '../css/sizing';
import {px, py, pt, pl, pr, pb, mt, ml, mx} from '../css/spacing';
import {transform, translate} from '../css/transform';
import {font, text, tracking, leading, underline, uppercase, whitespace} from '../css/typography';

const Avatar = styled.img(h._12, w._12, rounded.full, text.white, shadow.solid);

const HeroHeading = styled.h1(
  mt._3,
  text._3xl,
  leading._9,
  font.bold,
  text.white,
  sm([mt._6, text._4xl, leading._10]),
  xl([text._5xl, leading.tight])
);

const HeroSubheading = styled.h2(text.sm, font.semibold, text.gray._300, uppercase, tracking.wider);

const MediaObject = ({imgSrc, children}) => (
  <EzLayout>
    <div style={shrink._0}>
      <Avatar src={imgSrc} alt="" />
    </div>
    <div>{children}</div>
  </EzLayout>
);

// TODO dani: fix these

const RecipeLogo = ({className}) => (
  <svg className={className} viewBox="0 0 972.16 239.56" height="32" width="130">
    <use xlinkHref="#recipeLogo" />
  </svg>
);

const GithubLogo = ({className}) => (
  <svg className={className} height="24" width="24" viewBox="0 0 16 16">
    <path
      fill="currentColor"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    ></path>
  </svg>
);

const HeroDivider = ({className, style}) => (
  <svg
    style={style}
    className={className}
    height="70"
    width="20"
    fill="currentColor"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <use xlinkHref="#heroDivider" />
  </svg>
);

const Hero = ({className, imgSrc, children}) => (
  <div className={className} css={[relative, min.h.screen, overflow.hidden, bg.gray._900]}>
    <img
      src={imgSrc}
      alt=""
      css={[hidden, absolute, h.full, w.full, object.cover, object._3_10_center, lg(block)]}
    />
    <div
      css={[
        relative,
        min.h.screen,
        lg([
          min.w._3xl,
          flex,
          items.center,
          justify.center,
          w._3_5,
          py._20,
          pl._8,
          pr._8,
          bg.gray._900,
        ]),
        xl(min.w._4xl),
      ]}
    >
      <HeroDivider
        style={{transform: 'translate(50%)'}}
        css={[
          hidden,
          absolute,
          right._0,
          inset.y._0,
          h.full,
          w._48,
          text.gray._900,
          transform,
          translate.x._1_2,
          lg(block),
        ]}
      />
      {children}
    </div>
  </div>
);

const LinkButton = styled(Link)(
  inlineFlex,
  items.center,
  justify.center,
  whitespace.noWrap,
  px._6,
  py._3,
  border._1,
  border.transparent,
  text.base,
  leading._6,
  font.semibold,
  rounded.md,
  shadow.sm,
  xl([text.lg, py._4])
);

export default () => (
  <EzAppLayout>
    <Helmet
      title="Recipe UI"
      meta={[
        {name: 'description', content: 'Recipe Design System'},
        {name: 'keywords', content: 'Recipe Design System ezCater'},
      ]}
    >
      <html lang="en" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700"
        rel="stylesheet"
      ></link>
    </Helmet>
    <Global
      styles={css`
        /* CSS resets/normalize/preflight */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        a {
          color: inherit;
          text-decoration: inherit;
        }
        a {
          background-color: transparent;
        }
        img {
          border-style: solid;
        }
        img,
        video {
          max-width: 100%;
          height: auto;
        }
        body {
          margin: 0;
        }
        blockquote,
        dd,
        dl,
        figure,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        p,
        pre {
          margin: 0;
        }
        *,
        :after,
        :before {
          box-sizing: border-box;
          border: 0 solid #d2d6dc;
        }
      `}
    />

    <Hero imgSrc={withPrefix('/images/hero-pattern-xl.jpg')} css={font.display}>
      <div css={[relative]}>
        <div
          css={[
            px._6,
            pt._8,
            pb._12,
            md(max.w._3xl, mx.auto),
            lg([mx._0, max.w.none, pt._0, pb._16]),
          ]}
        >
          <EzLayout layout="split">
            <RecipeLogo css={[h._8, xl(h._9)]} />
            <div>
              <a
                href="https://github.com/ezcater/recipe"
                css={[
                  text.sm,
                  whitespace.noWrap,
                  font.semibold,
                  text.white,
                  flex,
                  items.center,
                  hover(underline),
                ]}
              >
                <GithubLogo css={[h._6, text.white]} />
                <span css={ml._2}>GitHub →</span>
              </a>
            </div>
          </EzLayout>
        </div>
        <div css={[px._6, md(max.w._3xl, mx.auto), lg(mx.auto, max.w.none)]}>
          <Link to="/changelog">
            <HeroSubheading as="span">Latest: v{packageJson.version}</HeroSubheading>
          </Link>

          <HeroHeading>
            Delicious UI components,
            <br />
            <span css={[text.ezGreen, inlineFlex, items.center]}>
              <span>from</span>&nbsp;
              <img src={ezcaterLogo} alt="ezcater" css={[h._7, xl(h._12)]} />
            </span>
          </HeroHeading>

          <p
            css={[
              mt._2,
              text.lg,
              leading._7,
              text.gray._300,
              sm(mt._3, text.xl, max.w.xl),
              xl(mt._4, text._2xl, max.w._2xl),
            ]}
          >
            Fully responsive React components that provide the building blocks you need to build
            pages faster.
          </p>
          <div css={[mt._6, xl(mt._12)]}>
            <EzLayout layout={{base: 'stack', medium: 'basic'}}>
              <LinkButton to="/guides/getting-started" css={[text.gray._900, bg.white]}>
                Getting started
              </LinkButton>
              <LinkButton to="/components" css={[text.white, bg.gray._800]}>
                Explore the components →
              </LinkButton>
            </EzLayout>
          </div>
        </div>
        <div css={[relative, mt._8, h._64, overflow.hidden, sm(mt._12), lg(hidden)]}>
          <img
            src={withPrefix('/images/hero-pattern-lg.jpg')}
            alt=""
            css={[h.full, w.full, object.cover, object.center]}
          />
        </div>
        <div
          css={[
            px._6,
            py._8,
            sm(pt._12),
            md(max.w._3xl, mx.auto),
            lg([py._0, pt._24, mx._0, max.w.full]),
          ]}
        >
          <HeroSubheading as="p">Designed and developed by</HeroSubheading>
          <div css={mt._4}>
            <EzLayout layout={{base: 'stack', medium: 'basic'}}>
              <a href="https://github.com/CraigCav">
                <MediaObject imgSrc="https://avatars0.githubusercontent.com/u/109814?s=160&v=4">
                  <p css={[font.semibold, text.white]}>Craig Cavalier</p>
                  <p css={[text.sm, text.gray._500]}>Recipe Developer</p>
                </MediaObject>
              </a>
              <a href="https://github.com/danidewitt">
                <MediaObject imgSrc="https://avatars.githubusercontent.com/u/3790037?s=160&v=4">
                  <p css={[font.semibold, text.white]}>Dani Dewitt</p>
                  <p css={[text.sm, text.gray._500]}>Recipe Developer</p>
                </MediaObject>
              </a>
              <a href="https://github.com/johnhemminger">
                <MediaObject imgSrc="https://ca.slack-edge.com/T032QEDCF-UC3DFULSE-275c0445daa9-512">
                  <p css={[font.semibold, text.white]}>John Hemminger</p>
                  <p css={[text.sm, text.gray._500]}>Recipe Designer</p>
                </MediaObject>
              </a>
              <a href="https://github.com/sambrocc">
                <MediaObject imgSrc="https://avatars.githubusercontent.com/u/10697937?s=160&v=4">
                  <p css={[font.semibold, text.white]}>Samantha Broccoli</p>
                  <p css={[text.sm, text.gray._500]}>Recipe Designer</p>
                </MediaObject>
              </a>
            </EzLayout>
          </div>
        </div>
      </div>
    </Hero>
  </EzAppLayout>
);
