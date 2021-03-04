import React from 'react';
import EzImageUpload from './EzImageUpload';

export default {
  title: 'EzImageUpload',
};

export function Basic() {
  return <EzImageUpload label="choose content">Choose content to upload</EzImageUpload>;
}

export function Rounded() {
  return (
    <EzImageUpload label="choose content" rounded>
      Choose content
    </EzImageUpload>
  );
}
