import styled from '@emotion/styled';
import React from 'react';
import {EzImageUpload, EzImageUploadProvider, useImageUploadContext} from '.';
import EzLayout from '../EzLayout';
import EzImageFilePreview from './EzImageFilePreview';

const LABEL = 'Drop image here or browse for file';

const Figure = styled.figure`
  height: 10rem;
  width: 10rem;

  & > img {
    height: 100%;
    width: 100%;
  }
`;

function FigurePreview({image}: {image: File}) {
  const {setImages} = useImageUploadContext();
  const onClick = () => {
    setImages?.(files => {
      if (!files) return files;
      const index = files.findIndex(file => file === image);
      return [...files.splice(index, 1)];
    });
  };
  return (
    <Figure key={image.name}>
      <EzImageFilePreview file={image} />
      <figcaption>{image.name}</figcaption>
      <button onClick={onClick} type="button">
        Remove
      </button>
    </Figure>
  );
}

function ImagePreviews() {
  const {images} = useImageUploadContext();

  if (!images) return null;

  return (
    <EzLayout layout="cluster">
      {Array.from(images).map(image => (
        <FigurePreview key={image.name} image={image} />
      ))}
    </EzLayout>
  );
}

export default {
  title: 'EzImageUpload',
};

export function Basic() {
  return <EzImageUpload label={LABEL} />;
}

export function Rounded() {
  return <EzImageUpload label={LABEL} rounded />;
}

export function VariableSize() {
  return <EzImageUpload label={LABEL} width="20rem" height="10rem" />;
}

export function ImageProvider() {
  return (
    <EzImageUploadProvider>
      <EzLayout layout="stack">
        <EzImageUpload multiple label={LABEL} />
        <ImagePreviews />
      </EzLayout>
    </EzImageUploadProvider>
  );
}
