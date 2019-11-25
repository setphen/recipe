import {css} from 'linaria';
import {styled} from 'linaria/react';
import {theme} from '../../themes/styled';

export const Subheading = styled.div`
  color: ${theme.colors.text.deemphasis};
  font-size: ${theme.fontSizes[300]};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.heading};
  margin-top: ${theme.spacing.xs};
`;

export const sizes = {
  h1: css`
    font-size: ${theme.fontSizes[700]};
    font-weight: ${theme.fontWeights.normal};
  `,
  h2: css`
    font-size: ${theme.fontSizes[600]};
    font-weight: ${theme.fontWeights.normal};
  `,
  h3: css`
    font-size: ${theme.fontSizes[500]};
    font-weight: ${theme.fontWeights.bold};
  `,
  h4: css`
    font-size: ${theme.fontSizes[400]};
    font-weight: ${theme.fontWeights.normal};
  `,
  h5: css`
    font-size: ${theme.fontSizes[300]};
    font-weight: ${theme.fontWeights.bold};
  `,
  h6: css`
    font-size: ${theme.fontSizes[200]};
    font-weight: ${theme.fontWeights.normal};
  `,
};

export const Heading = styled.h1`
  color: ${theme.colors.text.base};
  line-height: ${theme.lineHeights.heading};
  margin: 0;
`;
