import {EzHeading, EzLayout, EzLink, EzTextStyle} from '@ezcater/recipe';
import Image from 'next/image';
import styles from '../styles/PreviewCard.module.css';
import NextLink from './NextLink';

const LinkOrPlaceholder = ({path, tags, children}: any) =>
  tags && tags.includes('coming-soon') ? (
    <div style={{opacity: 0.5}}>{children}</div>
  ) : (
    <EzLink use="reset">
      <NextLink to={path}>{children}</NextLink>
    </EzLink>
  );

const PreviewCard = ({title, path, subtitle, name, tags}: any) => (
  <LinkOrPlaceholder {...{path, tags}}>
    <figure className={styles.m0}>
      <EzLayout layout="stack">
        <div className={styles.previewImage}>
          <Image width={1024} height={512} src={`/images/preview/${name}.png`} alt="" />
        </div>
        <figcaption>
          <EzHeading size="5">{title}</EzHeading>
          <p>
            <EzTextStyle use="subdued">{subtitle}</EzTextStyle>
          </p>
        </figcaption>
      </EzLayout>
    </figure>
  </LinkOrPlaceholder>
);

export default PreviewCard;
