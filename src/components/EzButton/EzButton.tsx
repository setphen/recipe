import React, {createElement, forwardRef} from 'react';
import StyledButton from './EzButton.styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & (RegularProps | TertiaryProps);

type SharedButtonProps = {
  destructive?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
};

type RegularProps = {
  loading?: boolean;
  use: 'primary' | 'secondary';
} & SharedButtonProps;

type TertiaryProps = {
  use: 'tertiary';
} & SharedButtonProps;

/**
 * Buttons represent actions on a page that can be triggered with one click.
 * Buttons can be used in forms, or in other locations in a page to communicate that an action is available.
 */
const EzButton = forwardRef<HTMLElement, ButtonProps>((props, ref) =>
  createElement(StyledButton, buildProps({...props, innerRef: ref}))
);

const buildProps = (props: ButtonProps & {innerRef: React.Ref<HTMLElement>}) => {
  if (props.use === 'tertiary') return props;

  return {...props, disabled: props.disabled || props.loading};
};

/**
 * defaultProps
 * @property {string} use - Buttons are considered secondary by default.
 */
EzButton.defaultProps = {
  use: 'secondary',
};

EzButton.displayName = 'EzButton';

/**
 * @component
 */
export default EzButton;