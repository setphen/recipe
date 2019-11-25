import {styled} from 'linaria/react';
import {theme} from '../../themes/styled';
import {Heading} from '../EzHeading/EzHeading.styles';

export const EzPageContainer = styled.div`
  background: ${theme.colors.page.background};
  padding: ${theme.spacing.sm} ${theme.spacing.xs};
  flex-grow: 1;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: ${theme.spacing.xl2};
  }

  p {
    margin: 0;
  }
`;

export const EzPageWrapper = styled.div`
  > *:not(:last-child) {
    margin-bottom: ${theme.spacing.sm};
  }

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    > *:not(:last-child) {
      margin-bottom: ${theme.spacing.xl};
    }
  }

  > ${Heading as any} {
    margin-bottom: ${theme.spacing.sm};
  }
`;
