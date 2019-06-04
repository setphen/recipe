import {css} from '@emotion/core';
import styled from '../../themes/styled';

const accentStyles = ({accent, theme}) =>
  accent &&
  css`
    border-left: 5px solid ${theme.colors.info.foreground};
  `;

type CardContainerProps = {
  theme?: object;
  accent: string;
};

export const CardContainer = styled.div<CardContainerProps>`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.border.base};
  border-radius: ${props => props.theme.borderRadius[2]};
  ${accentStyles};
`;

export const CardHeadingContainer = styled.div`
  margin: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg} 0;
`;

export const CardLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin: -${({theme}) => theme.spacing.sm} 0 0 -${({theme}) => theme.spacing.sm};
  justify-content: space-between;

  > * {
    margin: ${({theme}) => theme.spacing.sm} 0 0 ${({theme}) => theme.spacing.sm};
  }
`;

const vertical = ({horizontal, theme}) =>
  !horizontal &&
  css`
    > *:not(:first-child) {
      border-top: 1px solid ${theme.colors.border.base};
    }
  `;

const horizontal = ({horizontal: isHorizontal}) =>
  isHorizontal &&
  css`
    display: flex;

    > * {
      flex-basis: 0;
      flex-grow: 1;
    }
  `;

export const SectionContainer = styled.div(vertical, horizontal);
