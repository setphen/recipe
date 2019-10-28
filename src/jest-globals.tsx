import React from 'react';
import {create as reactCreate} from 'react-test-renderer';
import {render as rtlRender, cleanup} from 'react-testing-library';
import {renderToStaticMarkup} from 'react-dom/server';
import {ThemeProvider} from 'emotion-theming';
import {standard} from './themes';

import 'jest-dom/extend-expect';

const renderWithTheme = renderFn => (component, ...rest) =>
  renderFn(<ThemeProvider theme={standard}>{component}</ThemeProvider>, rest);

export const renderToHtml = renderWithTheme(renderToStaticMarkup);

export const fullRender = renderWithTheme(rtlRender);

export const create = renderWithTheme(reactCreate);

afterEach(cleanup);
