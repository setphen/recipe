import React from 'react';
import {css, styles} from 'css-zero/macro';
import {MaxWidth} from '../EzAppLayout/EzAppLayout';
import {theme} from '../../themes/styled';

type PageProps = {
  children: React.ReactNode;
};

const container = css`
  background: ${theme.colors.page.background};
  padding: ${theme.spacing.sm} ${theme.spacing.xs};
  flex-grow: 1;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: ${theme.spacing.xl2};
  }
`;

const wrapper = css`
  margin-bottom: ${theme.spacing.xl};
`;

const EzPageWrapper: React.FC = ({children}) => (
  <>
    {React.Children.map(children, child => (
      <div className={styles(wrapper)}>{child}</div>
    ))}
  </>
);

const EzPage: React.FC<PageProps> = ({children}) => {
  return (
    <div className={styles(container)}>
      <MaxWidth>
        <EzPageWrapper>{children}</EzPageWrapper>
      </MaxWidth>
    </div>
  );
};

EzPage.displayName = 'EzPage';

export default EzPage;
