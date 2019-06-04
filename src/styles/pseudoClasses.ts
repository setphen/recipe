import {css} from '@emotion/core';
import {StandardPropertiesHyphen, Color} from 'csstype';
import {darken} from '.';

type CSSPropertyName = keyof StandardPropertiesHyphen;

type Options = {
  color: Color;
  focusColor?: Color;
};

const magic = css;

export default (style: CSSPropertyName, {color, focusColor}: Options) => magic`
  ${style}: ${color};

  &:hover:enabled {
    ${style}: ${darken(color, 0.15)};
  }

  &:focus:enabled {
    ${style}: ${focusColor};
  }

  &:active:enabled {
    ${style}: ${darken(color, 0.25)};
  }
`;
