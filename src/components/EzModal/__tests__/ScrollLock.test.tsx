import React from 'react';
import {cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import ScrollLock from '../ScrollLock';

import {fullRender} from '../../../jest-globals';

afterEach(cleanup);

describe('EzModal', () => {
  it('sets the html to overflow hidden when open', () => {
    fullRender(<ScrollLock />);

    expect(
      window.getComputedStyle(document.documentElement).getPropertyValue('overflow')
    ).toContain('hidden');
  });

  it('does not set overflow hidden on the html when it is not open', () => {
    const {unmount} = fullRender(<ScrollLock />);
    unmount();

    expect(
      window.getComputedStyle(document.documentElement).getPropertyValue('overflow')
    ).not.toContain('hidden');
  });
});
