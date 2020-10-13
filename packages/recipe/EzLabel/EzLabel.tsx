import React from 'react';
import StyledLabel from './EzLabel.styles';

type Props = React.LabelHTMLAttributes<any> & {
  /**
   * changes the HTML element used to render the label
   */
  as?: 'label' | 'legend' | 'div';
  /**
   * changes the position of the label
   */
  position?: 'hidden' | 'top' | 'bottom' | 'left' | 'right';
  /**
   * changes the styles of the label for the selected size
   */
  size?: 'normal' | 'small';
  /**
   * changes the styles of the label to indicate an error state
   */
  error?: boolean;
};

/**
 * A component to provide consistent styling for Primary and Secondary labels.
 */
const EzLabel: React.FC<Props> = StyledLabel;

/**
 * defaultProps
 * @property {'label' | 'legend' | 'div'} as - label renders as a div element by default
 * @property {'hidden' | 'top' | 'bottom' | 'left' | 'right'} position - label renders on top by default
 * @property {'normal' | 'small'} position - label renders with normal size by default
 */
EzLabel.defaultProps = {
  as: 'div',
  position: null,
  size: 'normal',
};

export default EzLabel;