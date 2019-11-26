import {css} from 'linaria';
import {theme} from '../../themes/styled';

export const strong = css`
  font-weight: ${theme.fontWeights.bold};
`;

export const subdued = css`
  color: ${theme.colors.text.deemphasis};
`;
