import React from 'react';
import {cx} from 'linaria';
import {PageSection, aside, main} from './EzPageSection.styles';

/**
 * Page Sections are used to organize sections of content within EzPage.
 */
const EzPageSection = props => {
  const {className = ''} = props;

  return (
    <PageSection
      {...props}
      className={cx(className, props.use === 'aside' && aside, props.use === 'main' && main)}
    />
  );
};

EzPageSection.displayName = 'EzPageSection';

/**
 * @component
 */
export default EzPageSection;
