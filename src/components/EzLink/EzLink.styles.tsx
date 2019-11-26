import {styled} from 'linaria/react';
import {theme} from '../../themes/styled';
import pseudoClasses from '../../styles/pseudoClasses';

const base = {
  fontWeight: 'bold',
  textDecoration: 'none',
  ...pseudoClasses('color', {color: theme.colors.interactive.base}),
  '&:hover': {
    textDecoration: 'underline',
  },
};

export const StyledLink = styled.span`
  > * {
    ${base};
  }
`;

export const StyledAnchor = styled.a`
  ${base};
`;
