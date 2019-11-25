import React from 'react';
import {EzPageContainer, EzPageWrapper} from './EzPage.styles';
import {MaxWidth} from '../EzAppLayout/EzAppLayout';

type PageProps = {
  children: React.ReactNode;
};

const EzPage: React.FC<PageProps> = ({children}) => {
  return (
    <EzPageContainer>
      <MaxWidth>
        <EzPageWrapper>{children}</EzPageWrapper>
      </MaxWidth>
    </EzPageContainer>
  );
};

EzPage.displayName = 'EzPage';

export default EzPage;
