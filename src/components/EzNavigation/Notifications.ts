import {css} from 'react-emotion';
import styled from '../../themes/styled';

const Notification = styled.span`
  align-items: center;
  display: flex;
  font-weight: 900;
  font-size: 0.85rem;
  justify-content: center;
  height: 1.75rem;
  width: 1.75rem;
  position: absolute;
  right: 2em;
  border-radius: 1.75rem;
`;

export const Marketing = styled(Notification)`
  background-color: rgb(27, 188, 155);
  color: rgb(27, 32, 35);
`;

export const Counter = styled(Notification)`
  background-color: ${({theme}) => theme.colors.reds.base};
  color: white;
`;

const animateOnOpen = ({opened}) =>
  opened &&
  css`
    color: transparent;
    background-color: transparent;
    box-shadow: none;

    ::before,
    ::after {
      animation-duration: 1s;
    }
    ::before {
      will-change: transform, border-width, border-color;
      animation-name: bubble;
    }

    ::after {
      will-change: opacity, box-shadow;
      animation-name: sparkles;
    }
  `;

export const NotificationCounter = styled(Counter)`
  position: absolute;
  z-index: 2;
  top: 15px;
  right: 10px;
  box-shadow: 0px 0px 1px 5px #373c43;
  cursor: pointer;
  user-select: none;

  ::before,
  ::after {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    content: '';
    animation-timing-function: ease-out;
  }

  ::before {
    box-sizing: border-box;
    margin: -2.25rem;
    border: solid 2.25rem #e2264d;
    width: 4.5rem;
    height: 4.5rem;
    transform: scale(0);
  }

  ::after {
    margin: -0.1875rem;
    width: 0.375rem;
    height: 0.375rem;
    transform: scale(0.6);
    box-shadow: 0.32476rem -3rem 0 -0.1875rem #ec5353, -0.32476rem -2.625rem 0 -0.1875rem #ec5353,
      2.54798rem -1.61656rem 0 -0.1875rem #ec5353, 1.84982rem -1.89057rem 0 -0.1875rem #ec5353,
      2.85252rem 0.98418rem 0 -0.1875rem #ec5353, 2.63145rem 0.2675rem 0 -0.1875rem #ec5353,
      1.00905rem 2.84381rem 0 -0.1875rem #ec5353, 1.43154rem 2.22414rem 0 -0.1875rem #ec5353,
      -1.59425rem 2.562rem 0 -0.1875rem #ec5353, -0.84635rem 2.50595rem 0 -0.1875rem #ec5353,
      -2.99705rem 0.35095rem 0 -0.1875rem #ec5353, -2.48692rem 0.90073rem 0 -0.1875rem #ec5353,
      -2.14301rem -2.12438rem 0 -0.1875rem #ec5353, -2.25479rem -1.38275rem 0 -0.1875rem #ec5353;
  }

  @keyframes bubble {
    15% {
      transform: scale(0.6);
      border-color: #ec5353;
      border-width: 2.25rem;
    }
    30%,
    100% {
      transform: scale(0.6);
      border-color: #ec5353;
      border-width: 0;
    }
  }

  @keyframes sparkles {
    0%,
    20% {
      opacity: 0;
    }
    25% {
      opacity: 1;
      box-shadow: 0.32476rem -2.4375rem 0 0rem #ec5353, -0.32476rem -2.0625rem 0 0rem #ec5353,
        2.1082rem -1.26585rem 0 0rem #ec5353, 1.41004rem -1.53985rem 0 0rem #ec5353,
        2.30412rem 0.85901rem 0 0rem #ec5353, 2.08305rem 0.14233rem 0 0rem #ec5353,
        0.76499rem 2.33702rem 0 0rem #ec5353, 1.18748rem 1.71734rem 0 0rem #ec5353,
        -1.35019rem 2.0552rem 0 0rem #ec5353, -0.60229rem 1.99916rem 0 0rem #ec5353,
        -2.44865rem 0.22578rem 0 0rem #ec5353, -1.93852rem 0.77557rem 0 0rem #ec5353,
        -1.70323rem -1.77366rem 0 0rem #ec5353, -1.81501rem -1.03204rem 0 0rem #ec5353;
    }
  }

  ${animateOnOpen}

  @media screen and (min-width: ${props => props.theme.breakpoints.large}) {
    visibility: hidden;
  }
`;
