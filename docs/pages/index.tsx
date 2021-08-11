import Head from 'next/head';
import {EzAppLayout, EzLayout, EzLink} from '@ezcater/recipe';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import heroImage from '../public/images/hero-pattern-xl.jpg';
import heroImageLarge from '../public/images/hero-pattern-lg.jpg';
import ezcaterLogo from '../public/images/ezcater-logo.svg';
import recipeLogo from '../public/images/recipe-logo.svg';
import githubLogo from '../public/images/github-logo.svg';
// eslint-disable-next-line import/extensions
import packageJson from '../../package.json';

function Avatar({imgSrc, children, link}: any) {
  return (
    <EzLink use="reset">
      <a href={link}>
        <EzLayout>
          <div className={styles.flexShrink0}>
            <img src={imgSrc} alt="" className={styles.avatar} />
          </div>
          <div className={styles.avatarText}>{children}</div>
        </EzLayout>
      </a>
    </EzLink>
  );
}

export default function Home() {
  return (
    <EzAppLayout>
      <Head>
        <title>Recipe UI</title>
        <meta name="description" content="Recipe Design System" />
        <meta name="keywords" content="Recipe Design System ezcater" />
      </Head>
      <main className={styles.hero}>
        <div className={styles.heroImage}>
          <Image src={heroImage} alt="" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.heroFrame}>
          <svg
            className={styles.heroDivider}
            height="70"
            width="20"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className={styles.relative}>
            <header className={styles.header}>
              <EzLayout layout="split">
                <div className={styles.recipeLogo}>
                  <Image src={recipeLogo} alt="" />
                </div>
                <div>
                  <a href="https://github.com/ezcater/recipe" className={styles.githubLink}>
                    <Image src={githubLogo} alt="" width={24} height={24} layout="intrinsic" />
                    <span>GitHub →</span>
                  </a>
                </div>
              </EzLayout>
            </header>
            <div className={styles.headingContainer}>
              <Link href="/changelog">
                <a className={styles.label}>Latest: v{packageJson.version}</a>
              </Link>

              <h1 className={styles.heading}>
                Delicious UI components,
                <br />
                <span className={styles.headingHighlight}>
                  <span>from</span>&nbsp;
                  <span className={styles.logoSize}>
                    <Image src={ezcaterLogo} alt="ezcater" layout="fill" objectFit="contain" />
                  </span>
                </span>
              </h1>

              <p className={styles.tagLine}>
                Fully responsive React components that provide the building blocks you need to build
                pages faster.
              </p>
              <EzLayout layout={{base: 'stack', medium: 'basic'}}>
                <Link href="/guides/getting-started">
                  <a className={styles.linkPrimary}>Getting started</a>
                </Link>
                <Link href="/components">
                  <a className={styles.linkSecondary}>Explore the components →</a>
                </Link>
              </EzLayout>
            </div>
            <div className={styles.heroImageInline}>
              <Image src={heroImageLarge} alt="" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.contributors}>
              <p className={styles.label}>Designed and developed by</p>
              <div>
                <EzLayout layout={{base: 'stack', medium: 'basic'}}>
                  <Avatar
                    imgSrc="https://avatars0.githubusercontent.com/u/109814?s=160&v=4"
                    link="https://github.com/CraigCav"
                  >
                    <p>Craig Cavalier</p>
                    <p>Recipe Developer</p>
                  </Avatar>
                  <Avatar
                    imgSrc="https://avatars.githubusercontent.com/u/3790037?s=160&v=4"
                    link="https://github.com/danidewitt"
                  >
                    <p>Dani Dewitt</p>
                    <p>Recipe Developer</p>
                  </Avatar>
                  <Avatar
                    imgSrc="https://ca.slack-edge.com/T032QEDCF-UC3DFULSE-275c0445daa9-512"
                    link="https://github.com/johnhemminger"
                  >
                    <p>John Hemminger</p>
                    <p>Recipe Designer</p>
                  </Avatar>
                  <Avatar
                    imgSrc="https://avatars.githubusercontent.com/u/10697937?s=160&v=4"
                    link="https://github.com/sambrocc"
                  >
                    <p>Samantha Broccoli</p>
                    <p>Recipe Designer</p>
                  </Avatar>
                </EzLayout>
              </div>
            </div>
          </div>
        </div>
      </main>
    </EzAppLayout>
  );
}
