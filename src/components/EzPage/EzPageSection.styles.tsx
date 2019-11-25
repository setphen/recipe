import {css} from 'linaria';
import {styled} from 'linaria/react';
import {theme} from '../../themes/styled';
import {EzPageWrapper} from './EzPage.styles';

const asideWidth = '290px';

export const aside = css`
  @media screen and (min-width: ${theme.breakpoints.medium}) {
    width: ${asideWidth};
  }
`;

export const main = css`
  @media screen and (min-width: ${theme.breakpoints.medium}) {
    width: calc(100% - ${asideWidth} - ${theme.spacing.xl3});
  }
`;

export const PageSection = styled(EzPageWrapper)`
  @media screen and (min-width: ${theme.breakpoints.medium}) {
    display: inline-block;
    vertical-align: top;

    & + & {
      margin-left: ${theme.spacing.xl3};
    }
  }
`;
