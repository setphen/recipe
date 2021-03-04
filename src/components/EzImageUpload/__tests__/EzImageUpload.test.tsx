import React from 'react';
import {axe} from 'jest-axe';
import userEvent from '@testing-library/user-event';
import {visualSnapshots} from 'sosia';
import {render, screen} from '@testing-library/react';
import markdown from '../EzImageUpload.md';
import EzImageUpload from '../EzImageUpload';

const scope = {EzImageUpload};

describe('EzImageUpload', () => {
  visualSnapshots({markdown, scope});

  it('should meet accessibility guidelines', async () => {
    const {container} = render(<EzImageUpload label="upload" />);
    expect(await axe(container.outerHTML)).toHaveNoViolations();
  });

  it('Should show an image preview when an item is selected', async () => {
    const file = new File(['hello'], 'hello.png', {type: 'image/png'});
    render(<EzImageUpload label="upload" />);
    userEvent.upload(await screen.findByLabelText('upload'), file);
  });
});
