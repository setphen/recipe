import React from 'react';
import StyledBanner, {Link, StyledCloseButton} from './EzBanner.styles';
import EzHeading from '../EzHeading';

export default ({title, link, use, message, onDismiss, className}) => {
  return (
    <StyledBanner use={use} className={className}>
      <EzHeading size="3">{title}</EzHeading>
      <StyledCloseButton label="Close" onClick={onDismiss} />
      <p>{message}</p>
      <Link {...link} />
    </StyledBanner>
  );
};
