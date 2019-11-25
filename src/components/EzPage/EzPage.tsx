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
  :not(:last-child) {
    margin-bottom: ${theme.spacing.sm};
  }

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    :not(:last-child) {
      margin-bottom: ${theme.spacing.xl};
    }
  }
`;

const EzPageWrapper: React.FC = ({children}) => (
  <>
    {React.Children.map(children, child => {
      if (!React.isValidElement(child)) return child;

      let {className = ''} = child.props;

      className = [className, styles(wrapper)].join(' ').trim();

      return React.cloneElement(child, {className});
    })}
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
