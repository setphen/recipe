import React from 'react';
import {base} from './EzCardSection.styles';
import EzCardHeading from './EzCardHeading';
import styled from '../../themes/styled';

type HeadingProps = React.ComponentProps<typeof EzCardHeading>;

/**
 * Card Sections represent chunks of content within a Card.
 */
const StyledSection = styled.section<any>(base);

const EzCardSection: React.FC<HeadingProps> = ({title, subtitle, actions, children, ...props}) => {
  return (
    <div>
      {title && <EzCardHeading {...{actions, title, subtitle}} />}
      <StyledSection {...props}>{children}</StyledSection>
    </div>
  );
};

EzCardSection.displayName = 'EzCardSection';

export default EzCardSection;