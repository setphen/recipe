import React from 'react';
import Theme from 'docz-theme-default';
import {Global, css} from '@emotion/core';
import {themes} from '@ezcater/recipe';

export default ({children}) => (
  <>
    <Global
      styles={css`
        body {
          font-size: ${themes.standard.baseFontSize};
          font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
          line-height: normal;
        }
      `}
    />
    <Theme>{children}</Theme>
  </>
);
