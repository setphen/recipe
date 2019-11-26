import React from 'react';
import {strong, subdued} from './EzTextStyle.styles';
import variant from '../../styles/variant';

const use = variant('use', {
  strong,
  subdued,
});

type StringOrNumber = string | number;

type Props = {
  use: 'strong' | 'subdued';
  children: StringOrNumber | StringOrNumber[];
};
/**
 * Enhances text with styles to communicate emphasis.
 */
const EzTextStyle: React.FC<Props> = ({children, ...props}) => (
  <span className={use(props)}>{children}</span>
);

export default EzTextStyle;
