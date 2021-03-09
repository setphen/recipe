import React, {ChangeEventHandler, forwardRef, HTMLProps, useEffect, useRef} from 'react';
import {Container, Preview, Upload, VisuallyHidden} from './EzImageUpload.styles';
import {useImageUploadContext} from './EzImageUploadProvider';
import useUniqueId from '../../utils/hooks/useUniqueId';

interface Props extends Omit<HTMLProps<HTMLInputElement>, 'id' | 'children'> {
  readonly label: string;
  /**
   * if set to true, will make a circular image instead of a square
   */
  readonly children?: React.ReactNode;
  /**
   * Makes a circular instead of square image input
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
  ({onChange, rounded, label, height, width, children, ...props}, ref) => {
    const id = useUniqueId();
    const ctx = useImageUploadContext();
    const teardown = useRef<() => void>(() => {});

    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
      // We're going to take the first file
      // then generate an object url to use as a preview
      if (e.target.files instanceof FileList) ctx?.setImages(Array.from(e.target.files));
      onChange?.(e);
    };

    // This makes sure to revoke the object url.
    useEffect(() => {
      teardown.current?.();
    }, []);

    return (
      <Container height={height} width={width} rounded={rounded}>
        <Preview htmlFor={id}>{label}</Preview>
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
        {children}
      </Container>
    );
  }
);

EzImageUpload.defaultProps = {
  rounded: false,
};

/**
 * @component
 */
export default EzImageUpload;
