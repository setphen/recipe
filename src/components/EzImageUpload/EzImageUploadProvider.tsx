import React, {
  createContext,
  Dispatch,
  ReactNode,
  ReactNodeArray,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

interface Context {
  readonly images?: File[] | null;
  readonly setImages?: Dispatch<SetStateAction<File[] | null>>;
}

const ImageUploadContext = createContext<Context>({});

interface Props {
  readonly children: ReactNode | ReactNodeArray;
}

export function useImageUploadContext() {
  return useContext(ImageUploadContext);
}

/**
 * A provider that will communicate with an image upload component
 * This will allow you to access the files more easily across components
 * @param param0
 * @returns
 * @example
 * ```jsx
 * function ImagePreviews() {
 *   const {images} = useImageUploadContext();
 *   return (
 *     <ul>
 *       {Array.from(images).map(image => (
 *         <li key={image.name}>{image.name}</li>
 *       ))}
 *     </ul>
 *   )
 * }
 *
 * function Images() {
 *   return (
 *     <EzImageUploadProvider>
 *       <EzImageUpload label="Select your images" />
 *       <ImagePreviews />
 *     </EzImageUploadProvider>
 *   )
 * }
 * ```
 */
const EzImageUploadProvider = ({children}: Props): JSX.Element => {
  const [images, setImages] = useState<File[] | null>(null);
  const ctx = useMemo(() => ({images, setImages}), [images, setImages]);
  return <ImageUploadContext.Provider value={ctx}>{children}</ImageUploadContext.Provider>;
};

export default EzImageUploadProvider;
