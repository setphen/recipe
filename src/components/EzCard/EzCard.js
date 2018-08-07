import React from 'react';
import PropTypes from 'prop-types';
import {CardContainer, CardHeading, CardHeadingContainer, SectionContainer, CardSubheading} from './EzCard.styles';
import EzCardSection from './EzCardSection';
import EzTextStyle from '../EzTextStyle';
import {standard} from '../../themes';
import {filterValidProps} from '../../utils';

function isEzCardSection(element) {
  return element.type && element.type.displayName === 'EzCardSection';
}

function wrappedChildren(children) {
  if (isEzCardSection(children[0] || children)) {
    return children;
  }

  return <EzCardSection>{children}</EzCardSection>;
}

/**
 * Cards are the primary means of grouping content on a page.
 */
const EzCard = ({title, subtitle, ...props}) => (
  <CardContainer {...filterValidProps(props)} theme={props.theme}>
    {title && <CardHeadingContainer theme={props.theme}>
      <CardHeading theme={props.theme}>{title}</CardHeading>
      {subtitle && <CardSubheading theme={props.theme}>
        <EzTextStyle use="subdued">{subtitle}</EzTextStyle>
        </CardSubheading>}
      </CardHeadingContainer>}
    <SectionContainer horizontal={props.horizontal} theme={props.theme}>
      {wrappedChildren(props.children)}
    </SectionContainer>
  </CardContainer>
);

EzCard.propTypes = {
  /**
   * The content to render inside the card.
   */
  children: PropTypes.node.isRequired,
  /**
   * An optional property specifying a horizontal layout of the card's sectionsw.
   */
  horizontal: PropTypes.bool,
  /**
   * An optional heading for the card.
   */
  title: PropTypes.string,
};

EzCard.defaultProps = {
  theme: standard,
};

EzCard.displayName = 'EzCard';

/**
 * @component
 */
export default EzCard;
