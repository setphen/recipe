import React, {ChangeEventHandler, forwardRef, HTMLProps, useEffect, useRef, useState} from 'react';
import {Container, Preview, Upload, VisuallyHidden} from './EzImageUpload.styles';
import useUniqueId from '../../utils/hooks/useUniqueId';

interface Props extends Omit<HTMLProps<HTMLInputElement>, 'id'> {
  /**
   * Callback that is invoked when the preview changes.
   * The url represents an object url, or a temporary preview of the given file
   * @param url
   */
  onPreviewChange?(url: string): void;
  readonly label: string;
  /**
   * if set to true, will make a circular image instead of a square
   */
  readonly rounded?: boolean;
}

/**
 * Component for uploading a singular image
 * Shows a preview of the image after it's been uploaded
 * Forwards the ref directly to the input component
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const [file, setFile] = useState<File | null>(null);
 *   const onChange: ChangeEventHandler<HTMLInputElement> = ({ target: { files } }) => {
 *     if (files instanceof FileList) {
 *       const [file] = files;
 *       setFile(file);
 *     }
 *   }
 *   return (
 *     <EzImageUpload
 *       onChange={onChange}
 *     />
 *   )
 * }
 * ```
 */
const EzImageUpload = forwardRef<HTMLInputElement, Props>(
  ({onChange, rounded, onPreviewChange, label, ...props}, ref) => {
    const id = useUniqueId();
    const [objectUrl, setObjectUrl] = useState<string | null>(null);
    const teardown = useRef<() => void>(() => {});

    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
      // We're going to take the first file
      // then generate an object url to use as a preview
      if (e.target.files instanceof FileList) {
        const [file] = e.target.files;
        setObjectUrl(URL.createObjectURL(file));
        onPreviewChange?.(objectUrl);
        // We need to revoke the object url when this component unmounts
        // save it in a ref to make sure that the use effect has no dependencies.
        teardown.current = () => URL.revokeObjectURL(objectUrl);
      }
      onChange?.(e);
    };

    // This makes sure to revoke the object url.
    useEffect(() => {
      teardown.current?.();
    }, []);

    return (
      <Container rounded={rounded} hasPreview={!!objectUrl}>
        <Preview htmlFor={id} style={{backgroundImage: `url("${objectUrl}")`}}>
          {!objectUrl && label}
        </Preview>
        <VisuallyHidden>
          <Upload
            aria-hidden="true"
            aria-label={label}
            accept="image/*"
            {...props}
            id={id}
            type="file"
            onChange={handleChange}
            ref={ref}
          />
        </VisuallyHidden>
      </Container>
    );
  }
);

EzImageUpload.defaultProps = {
  rounded: false,
  onPreviewChange() {},
};

/**
 * @component
 */
export default EzImageUpload;
