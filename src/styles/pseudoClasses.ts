import {StandardProperties, Color} from 'csstype';
import darken from './darken';

type CSSPropertyName = keyof StandardProperties;

type Options = {
  color: Color;
  focusColor?: Color;
};

export default (style: CSSPropertyName, {color, focusColor}: Options) => ({
  [style]: color,
  '&:hover:enabled': {
    [style]: darken(color, 0.15),
  },
  '&:focus:enabled': {
    [style]: focusColor,
  },
  '&:active:enabled': {
    [style]: darken(color, 0.25),
  },
});
