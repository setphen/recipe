import styled from '@emotion/styled';
import {CSSProperties} from 'react';

interface ContainerProps {
  readonly rounded?: boolean;
  readonly hasPreview?: boolean;
}

function getBorderColor({hasPreview}: ContainerProps): CSSProperties['borderColor'] {
  if (hasPreview) return 'transparent';
  return '#ccc';
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  height: 10rem;
  width: 10rem;
  overflow: hidden;
  border-style: dashed;
  border-color: ${getBorderColor};
  border-width: 2px;
  border-radius: ${({rounded}) => (rounded ? '100%' : '0.5rem')};
`;

export const Preview = styled.label`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  pointer-events: none;
  user-select: none;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 150ms ease-in-out;
`;

/**
 * Makes content accessible to screen-readers,
 * but not be visually apparent on the page.
 * https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
 */
export const VisuallyHidden = styled.span`
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap",
  wordWrap: "normal",
`;

export const Upload = styled.input`
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;
