import React from 'react';
import {cx} from 'linaria';
import {Heading, Subheading, sizes} from './EzHeading.styles';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  size: '1' | '2' | '3' | '4' | '5' | '6';
  id?: string;
  className?: string;
  subheading?: string;
};

/**
 * Headings are used to create visual hierarchy in page content. They are the primary means of controlling typography.
 */
const EzHeading: React.FC<HeadingProps> = ({
  as,
  id,
  children: title,
  className,
  size: headingSize,
  subheading: subtitle,
}) => {
  const headingElement = as || `h${headingSize}`;
  const size = sizes[`h${headingSize}`];

  const heading = (
    <Heading className={cx(className, size)} as={headingElement as any} id={id}>
      {title}
    </Heading>
  );

  const subheading = subtitle && (headingSize === '3' || headingSize === '5') && (
    <Subheading>{subtitle}</Subheading>
  );

  if (!subheading) return heading;

  return (
    <header>
      {heading}
      {subheading}
    </header>
  );
};

export default EzHeading;
