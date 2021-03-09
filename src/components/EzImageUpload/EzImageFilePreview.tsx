import React, {forwardRef, HTMLProps, useEffect, useState} from 'react';
import {ImagePreview} from './EzImageUpload.styles';

interface Props extends HTMLProps<HTMLImageElement> {
  /**
   * File to display a preview for
   */
  readonly file: File;
  readonly crossOrigin?: '' | 'anonymous' | 'use-credentials';
}

/**
 * Given a `File` object that's an image, allows you to display a preview
 * @TODO this should likely be expanded to include other formats, such as `pdf`
 */
const EzImageFilePreview = forwardRef<HTMLImageElement, Props>(
  ({file, alt = '', ...props}, ref) => {
    const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
    useEffect(() => {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }, [file]);

    return <ImagePreview {...props} alt={alt} src={previewUrl} ref={ref} />;
  }
);

export default EzImageFilePreview;
